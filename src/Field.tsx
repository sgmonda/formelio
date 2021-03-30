import React, { Component } from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import styles from '../style/index.module.sass';
import { TField } from './types';
import cl from 'classnames';
import Input from './Input';
import Icon from './Icon';
import COLORS from './Colors';

const ERROR_HIDE_DELAY = 1000;

type Props<T, F> = TField<T, F> & {
  onChange: (value: T, isValid: boolean) => void;
  validator: (value?: T) => Promise<string[]>;
  value?: T;
};

type State<T> = {
  errors: string[];
  isFocused: boolean;
  isTyping: boolean;
  value: T | undefined;
};

export class Field<T, F> extends Component<Props<T, F>, State<T>> {
  static initialState = { errors: [], isFocused: false, isTyping: false, value: undefined };
  private typingTimeout: NodeJS.Timeout | undefined = undefined;

  constructor(props: Props<T, F>) {
    super(props);
    this.state = this.getStateAndValidate(props);
  }

  private getStateAndValidate = (props: Props<T, F>): State<T> => {
    const state = {
      ...Field.initialState,
      value: props.value,
    };
    this.validate(props);
    return state;
  };

  public validate = (props: Props<T, F> = this.props) => {
    props.validator(props.value).then((errors) => this.setState({ errors: errors || [] }));
  };

  public componentDidUpdate = (prevProps: Props<T, F>) => {
    if (prevProps.value !== this.state.value) {
      const newState = {
        ...this.getStateAndValidate(this.props),
        isFocused: this.state.isFocused,
        isTyping: this.state.isTyping,
      };
      this.setState(newState);
    }
  };

  private onChange = async (value: T) => {
    // Do not show errors while typing
    clearTimeout(this.typingTimeout as any);
    this.typingTimeout = setTimeout(() => {
      this.setState({ isTyping: false });
    }, ERROR_HIDE_DELAY);

    const { validator } = this.props;
    const errors = (await validator(value)) || ['x'];
    this.setState({ errors, isTyping: true, value });
    this.props.onChange(value, !errors.length);
  };

  private renderHint = () => {
    const { colors, help } = this.props;
    const { errors, isFocused, isTyping } = this.state;
    const isError = !!errors.length && !isTyping;
    let backgroundColor = undefined;
    if (isError) backgroundColor = colors?.error || COLORS.ERROR;
    else if (isFocused) backgroundColor = colors?.accent || COLORS.ACCENT;
    return (
      <div
        className={cl({
          [styles.hint]: true,
          [styles.isFocused]: isFocused,
          [styles.hidden]: !isFocused,
          [styles.isErrored]: isError,
        })}
        style={{ backgroundColor }}
      >
        <div className={styles.spike} style={{ borderBottomColor: backgroundColor }} />
        {isError && (
          <div>
            {errors.map((err) => (
              <div key={err}>
                {err}
                <br />
              </div>
            ))}
          </div>
        )}
        {!isError && <span>{help}</span>}
      </div>
    );
  };

  private renderStateIcon = () => {
    const { colors } = this.props;
    const { errors, isFocused, isTyping } = this.state;
    const isError = !!errors.length && !isTyping;
    let color = 'inherit' || undefined;
    if (isError) color = colors?.error || COLORS.ERROR;
    else if (isFocused) color = colors?.accent || COLORS.ACCENT;
    return (
      <div
        className={cl({
          [styles.icon]: true,
          [styles.isFocused]: isFocused,
          [styles.isErrored]: isError,
        })}
        style={{ color }}
      >
        <Icon id={isError ? 'exclamation-triangle' : 'question-circle'} />
      </div>
    );
  };

  private renderInput = () => {
    const { help } = this.props;
    const { errors, isFocused, isTyping, value } = this.state;
    const isError = !!errors.length && !isTyping;
    return (
      <Input
        {...this.props}
        hasHint={isError || !!help}
        isErrored={isError}
        isFocused={isFocused}
        value={value}
        onChange={this.onChange}
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => this.setState({ isFocused: false })}
      />
    );
  };

  private renderLabel = () => {
    const { colors, disabled, icon, label, name } = this.props;
    const { errors, isFocused, isTyping, value } = this.state;
    const isEmpty = !value;
    const isError = !!errors.length && !isTyping;
    let color = 'inherit';
    if (isError) color = colors?.error || COLORS.ERROR;
    else if (isFocused) color = colors?.accent || COLORS.ACCENT;
    return (
      <label
        className={cl({
          [styles.isFocused]: isFocused,
          [styles.isEmpty]: isEmpty,
          [styles.isDisabled]: disabled,
        })}
        style={{ color }}
      >
        {icon && <Icon id={icon} />} {label || name}
      </label>
    );
  };

  private renderCheckbox = () => {
    const { label, name } = this.props;
    return (
      <div className={`${styles.checkbox}`} style={{ color: 'inherit' }}>
        {this.renderInput()}{' '}
        <label htmlFor={name}>
          <ReactMarkdownWithHtml disallowedTypes={['paragraph']} allowDangerousHtml unwrapDisallowed>
            {label || name}
          </ReactMarkdownWithHtml>
        </label>
      </div>
    );
  };

  public render = () => {
    const { disabled, help, type } = this.props;
    const { errors = [], isTyping } = this.state;
    const hasHint = (errors.length > 0 && !isTyping) || help;
    const isError = !!errors.length && !isTyping;
    if (type === 'check') return this.renderCheckbox();
    return (
      <div
        className={cl({
          [styles.field]: true,
          [styles.isErrored]: isError,
          [styles.isDisabled]: disabled,
        })}
      >
        {this.renderLabel()}
        {this.renderInput()}
        {hasHint && this.renderStateIcon()}
        {hasHint && this.renderHint()}
      </div>
    );
  };
}
