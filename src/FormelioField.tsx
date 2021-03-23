import React, { ChangeEventHandler, Component } from 'react';
import styles from '../style/index.module.sass';
import { Field } from './typings';
import cl from 'classnames';

type Props<T> = Field<T> & {
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
    if (props.value) {
      this.props.validator?.(props.value).then((errors) => this.setState({ errors: errors || [] }));
    }
    return state;
  };

  public componentDidUpdate = (prevProps: Props<T>) => {
    if (prevProps.value !== this.state.value) {
      this.setState(this.getStateAndValidate(this.props));
    }
  };

  private onChange: ChangeEventHandler<HTMLInputElement> = async (ev) => {
    const { validator } = this.props;
    const value = (ev.target.value as any) as T;
    const errors = (await validator?.(value)) || [];
    this.setState({ errors, value });
    this.props.onChange(value, !errors.length);
  };

  public render = () => {
    const { help, label, name } = this.props;
    const { errors, isFocused, value } = this.state;
    const hint = errors.join(' / ') || help;
    return (
      <div className={`${styles.field} ${errors.length ? styles.isErrored : ''}`}>
        <label className={isFocused ? styles.isFocused : value ? '' : styles.isEmpty}>{label || name}</label>
        <input
          className={cl({
            [styles.isErrored]: !!errors.length,
          })}
          type="text"
          defaultValue={value as any}
          onFocus={() => this.setState({ isFocused: true })}
          onBlur={() => this.setState({ isFocused: false })}
          onChange={this.onChange}
        />
        {hint && (
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
        )}
        {hint && (
          <div
            className={cl({
              [styles.hint]: true,
              [styles.isFocused]: isFocused,
              [styles.hidden]: !isFocused,
              [styles.isErrored]: !!errors.length,
            })}
          >
            <div className={styles.spike} />
            {hint}
          </div>
        )}
      </div>
    );
  };
}
