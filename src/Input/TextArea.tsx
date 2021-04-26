import React from 'react';
import cl from 'classnames';
import { TInputProps } from '../types';
import styles from '../styles.module.css';

const TextArea = (props: TInputProps<string>) => {
  return (
    <textarea
      {...props}
      className={cl({
        [styles.isErrored]: props.isErrored,
        [styles.hasHint]: props.hasHint,
      })}
      style={{ borderColor: props.borderColor, color: 'inherit' }}
      autoComplete={props.autocomplete}
      readOnly={!props.isFocused}
      // defaultValue={props.value}
      value={props.value || ''}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={(ev) => props.onChange(ev.target.value)}
    ></textarea>
  );
};

export default TextArea;
