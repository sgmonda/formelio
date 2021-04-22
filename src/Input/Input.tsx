import React from 'react';
import cl from 'classnames';
import { TInputProps } from '../types';
import styles from '../styles.module.css';

const CommonInput = (props: TInputProps<string>) => {
  return (
    <input
      {...props}
      className={cl({
        [styles.isErrored]: props.isErrored,
        [styles.hasHint]: props.hasHint,
      })}
      style={{ borderColor: props.borderColor, color: 'inherit' }}
      autoComplete={props.autocomplete}
      readOnly={!props.isFocused}
      type={props.type || 'text'}
      // defaultValue={props.value}
      value={props.value || ''}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={(ev) => props.onChange(ev.target.value)}
    />
  );
};

export default CommonInput;
