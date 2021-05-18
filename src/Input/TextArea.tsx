import React from 'react';
import cl from 'classnames';
import { TInputProps } from '../types';
import styles from '../style/index.module.sass';

const TextArea = (props: TInputProps<string>) => {
  return (
    <textarea
      id={props.id}
      required={props.required}
      disabled={props.disabled}
      name={props.name}
      className={cl({
        [styles.isErrored]: props.isErrored,
        [styles.hasHint]: props.hasHint,
      })}
      style={{ borderColor: props.borderColor, color: 'inherit' }}
      autoComplete={props.autocomplete}
      value={props.value || ''}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={(ev) => props.onChange(ev.target.value)}
    ></textarea>
  );
};

export default TextArea;
