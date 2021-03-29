import React, { Component } from 'react';
import styles from '../style/index.module.sass';
import { TField } from './types';
import cl from 'classnames';
import Input from './Input';
import Icon from './Icon';

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
    const errors = (await validator(value)) || [];
    this.setState({ errors, isTyping: true, value });
    this.props.onChange(value, !errors.length);
  };

  private renderHint = () => {
    const { help } = this.props;
    const { errors, isFocused, isTyping } = this.state;
    const isError = !!errors.length && !isTyping;
    return (
      <div
        className={cl({
          [styles.hint]: true,
          [styles.isFocused]: isFocused,
          [styles.hidden]: !isFocused,
          [styles.isErrored]: isError,
        })}
      >
        <div className={styles.spike} />
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
    const { errors, isFocused, isTyping } = this.state;
    const isError = !!errors.length && !isTyping;
    return (
      <div
        className={cl({
          [styles.icon]: true,
          [styles.isFocused]: isFocused,
          [styles.isErrored]: isError,
        })}
      >
        <img
          src={require(`../assets/img/${isError ? 'exclamation' : 'info'}.png`)}
          style={{ height: '100%', width: '100%' }}
        />
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
    const { disabled, icon, label, name } = this.props;
    const { isFocused, value } = this.state;
    const isEmpty = !value;
    return (
      <label
        className={cl({
          [styles.isFocused]: isFocused,
          [styles.isEmpty]: isEmpty,
          [styles.isDisabled]: disabled,
        })}
      >
        {icon && <Icon id={icon} />} {label || name}
      </label>
    );
  };

  public render = () => {
    const { help } = this.props;
    const { errors = [], isTyping } = this.state;
    const hasHint = (errors.length > 0 && !isTyping) || help;
    const isError = !!errors.length && !isTyping;
    return (
      <div className={`${styles.field} ${isError ? styles.isErrored : ''}`}>
        {this.renderLabel()}
        {this.renderInput()}
        {hasHint && this.renderStateIcon()}
        {hasHint && this.renderHint()}
      </div>
    );
  };
}
