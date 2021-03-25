import React, { Component } from 'react';
import styles from '../style/index.module.sass';
import { Field } from './typings';
import cl from 'classnames';
import Input from './Input';

type Props<T> = Field<T> & {
  formValue: { [key: string]: any };
  value?: T;
  onChange: (value: T, isValid: boolean) => Promise<T>;
};

type State<T> = {
  errors: string[];
  isFocused: boolean;
  value: T | undefined;
};

export type FieldProps<T> = Props<T>;
export class FormelioField<T> extends Component<Props<T>, State<T>> {
  static initialState = { errors: [], isFocused: false, value: undefined };

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
      const newState = { ...this.getStateAndValidate(this.props), isFocused: this.state.isFocused };
      this.setState(newState);
    }
  };

  private onChange = async (value: T) => {
    const { formValue, validator } = this.props;
    const errors = (await validator?.(value, formValue)) || [];
    this.setState({ errors, value });
    this.props.onChange(value, !errors.length);
  };

  private renderHint = () => {
    const { help } = this.props;
    const { errors, isFocused } = this.state;
    return (
      <div
        className={cl({
          [styles.hint]: true,
          [styles.isFocused]: isFocused,
          [styles.hidden]: !isFocused,
          [styles.isErrored]: !!errors.length,
        })}
      >
        <div className={styles.spike} />
        {!!errors.length && (
          <div>
            {errors.map((err) => (
              <div key={err}>
                {err}
                <br />
              </div>
            ))}
          </div>
        )}
        {!errors.length && <span>{help}</span>}
      </div>
    );
  };

  private renderIcon = () => {
    const { errors, isFocused } = this.state;
    return (
      <div
        className={cl({
          [styles.icon]: true,
          [styles.isFocused]: isFocused,
          [styles.isErrored]: !!errors.length,
        })}
      >
        <img
          src={require(`../assets/img/${errors.length ? 'exclamation' : 'info'}.png`)}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    );
  };

  private renderInput = () => {
    const { help, isDisabled, name, options, placeholder } = this.props;
    const { errors, value } = this.state;
    return (
      <Input
        name={name}
        hasHint={!!errors.length || !!help}
        isErrored={!!errors.length}
        isDisabled={isDisabled}
        value={value}
        options={options}
        placeholder={placeholder}
        onChange={this.onChange}
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => this.setState({ isFocused: false })}
      />
    );
  };

  private renderLabel = () => {
    const { isDisabled, label, name } = this.props;
    const { isFocused, value } = this.state;
    const isEmpty = !value;
    return (
      <label
        className={cl({
          [styles.isFocused]: isFocused,
          [styles.isEmpty]: isEmpty,
          [styles.isDisabled]: isDisabled,
        })}
      >
        {label || name}
      </label>
    );
  };

  public render = () => {
    const { help } = this.props;
    const { errors } = this.state;
    const hasHint = errors.length > 0 || help;
    return (
      <div className={`${styles.field} ${errors.length ? styles.isErrored : ''}`}>
        {this.renderLabel()}
        {this.renderInput()}
        {hasHint && this.renderIcon()}
        {hasHint && this.renderHint()}
      </div>
    );
  };
}
