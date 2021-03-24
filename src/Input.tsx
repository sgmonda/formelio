import React from 'react';
import styles from '../style/index.module.sass';
import cl from 'classnames';
import RSelect from 'react-select';

type Props<T> = {
  value?: T;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  isErrored: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: T) => Promise<T>;
};

const CommonInput = (props: Props<any>) => {
  return (
    <input
      className={cl({
        [styles.isErrored]: props.isErrored,
      })}
      type="text"
      defaultValue={props.value as any}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={(ev) => props.onChange(ev.target.value)}
    />
  );
};

const Select = (props: Props<string>) => {
  return <RSelect options={props.options} />;
};

const Input = (props: Props<any>) => {
  const { options } = props;
  if (options) return Select(props);
  return CommonInput(props);
};

export default Input;
