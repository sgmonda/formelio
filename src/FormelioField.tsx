import React, { Component } from 'react';
import styles from '../style/index.module.sass';
import { Field } from './typings';
import cl from 'classnames';
import Input from './Input';

const ERROR_HIDE_DELAY = 1000;

type Props<T> = Field<T> & {
  formValue: { [key: string]: any };
  value?: T;
  onChange: (value: T, isValid: boolean) => Promise<T>;
};

type State<T> = {
  errors: string[];
  isFocused: boolean;
  isTyping: boolean;
  value: T | undefined;
};

export type FieldProps<T> = Props<T>;
export class FormelioField<T> extends Component<Props<T>, State<T>> {
  static initialState = { errors: [], isFocused: false, isTyping: false, value: undefined };
  private typingTimeout: NodeJS.Timeout | undefined = undefined;

  constructor(props: Props<T>) {
    super(props);
    this.state = this.getStateAndValidate(props);
  }

  private getStateAndValidate = (props: Props<T>): State<T> => {
    const state = {
      ...FormelioField.initialState,
      value: props.value,
    };
    props
      .validator?.((props.value || '') as any, props.formValue)
      .then((errors) => this.setState({ errors: errors || [] }));
    return state;
  };

  public componentDidUpdate = (prevProps: Props<T>) => {
    if (prevProps.value !== this.state.value || prevProps.formValue !== this.props.formValue) {
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

    const { formValue, validator } = this.props;
    const errors = (await validator?.(value, formValue)) || [];
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

  private renderIcon = () => {
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
    const { errors, isTyping, value } = this.state;
    const isError = !!errors.length && !isTyping;
    return (
      <Input
        {...this.props}
        hasHint={isError || !!help}
        isErrored={isError}
        value={value}
        onChange={this.onChange}
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => this.setState({ isFocused: false })}
      />
    );
  };

  private renderLabel = () => {
    const { disabled, label, name } = this.props;
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
        {label || name}
      </label>
    );
  };

  public render = () => {
    const { help } = this.props;
    const { errors, isTyping } = this.state;
    const hasHint = (errors.length > 0 && !isTyping) || help;
    const isError = !!errors.length && !isTyping;
    return (
      <div className={`${styles.field} ${isError ? styles.isErrored : ''}`}>
        {this.renderLabel()}
        {this.renderInput()}
        {hasHint && this.renderIcon()}
        {hasHint && this.renderHint()}
      </div>
    );
  };
}
