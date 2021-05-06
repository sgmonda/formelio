import React, { Component } from 'react';
import styles from '../../style/index.module.sass';
import { TFieldProps, TFieldState } from '../types';
import cl from 'classnames';
import Input from '../Input';
import Icon from '../Icon';
import COLORS from '../Colors';
import Hint from './Hint';
import { getBorderColor } from '../modules';
import Markdown from '../Markdown';

const ERROR_HIDE_DELAY = 1000;

type Props<T, F> = TFieldProps<T, F>;
type State<T> = TFieldState<T>;

export class Field<T, F> extends Component<Props<T, F>, State<T>> {
  static initialState = { errors: [], isDirty: false, isFocused: false, isTyping: false, value: undefined };
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
    props.validator(props.value as T).then((errors) => this.setState({ errors: errors || [] }));
  };

  public componentDidUpdate = (prevProps: Props<T, F>) => {
    if (prevProps.value !== this.state.value) {
      const newState = {
        ...this.getStateAndValidate(this.props),
        isDirty: this.state.isDirty,
        isFocused: this.state.isFocused,
        isTyping: this.state.isTyping,
      };
      this.setState(newState);
    }
    const shouldReset = Object.keys(prevProps.formValue).length && !Object.keys(this.props.formValue).length;
    if (shouldReset) {
      this.setState({ isDirty: false });
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
    this.setState({ errors, isDirty: true, isTyping: true, value });
    this.props.onChange(value, !errors.length);
  };

  private renderStateIcon = () => {
    const { colors } = this.props;
    const { errors, isDirty, isFocused, isTyping } = this.state;
    const isError = !!errors.length && !isTyping && isDirty;
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
    const { errors, isDirty, isFocused, isTyping, value } = this.state;
    const isError = !!errors.length && !isTyping && isDirty;
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

  // eslint-disable-next-line complexity
  private renderLabel = () => {
    const { colors, disabled, icon, label, name, required } = this.props;
    const { errors, isDirty, isFocused, isTyping, value } = this.state;
    const isEmpty = !value;
    const isErrored = !!errors.length && !isTyping && isDirty;
    let color = 'inherit';
    if (isErrored) color = colors?.error || COLORS.ERROR;
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
        <span style={{ flex: 1 }}>
          {icon && <Icon id={icon} />} <Markdown text={label || name || ''} /> {required && <span>*</span>}
        </span>
        {Array.isArray(value) && !!value.length && <span>({value.length})</span>}
      </label>
    );
  };

  private renderCheckbox = (isErrored: boolean) => {
    const { colors, label, name } = this.props;
    let color = 'inherit';
    if (isErrored) color = colors?.error || COLORS.ERROR;
    return (
      <div className={`${styles.checkbox}`} style={{ ...getBorderColor({ isErrored }), color }}>
        {this.renderInput()}{' '}
        <label htmlFor={name}>
          <Markdown text={label || name || ''} />
        </label>
      </div>
    );
  };

  public render = () => {
    const { disabled, help, required, type, value } = this.props;
    const { errors = [], isDirty, isTyping, isFocused } = this.state;
    const isError = isDirty && !isTyping && (errors.length > 0 || (required && !value));
    const hasIcon = isError || help;
    const hasHint = hasIcon && isFocused;
    if (type === 'check') return this.renderCheckbox(!!isError);
    return (
      <div
        className={cl({
          [styles.field]: true,
          [styles.isErrored]: isError,
          [styles.isDisabled]: disabled,
        })}
      >
        {this.renderInput()}
        {this.renderLabel()}
        {hasIcon && this.renderStateIcon()}
        {hasHint && <Hint<T, F> {...this.props} {...this.state} />}
      </div>
    );
  };
}
