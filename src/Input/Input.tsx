import React from 'react';
import cl from 'classnames';
import { TInputProps } from '../types';
import styles from '../styles.module.css';
import COLORS from '../Colors';

const CommonInput = (props: TInputProps<string>) => {
  const { colors } = props;
  let color = 'inherit';
  if (props.isErrored) color = colors?.error || COLORS.ERROR;
  return (
    <input
      required={props.required}
      disabled={props.disabled}
      max={props.max}
      min={props.min}
      name={props.name}
      className={cl({
        [styles.isErrored]: props.isErrored,
        [styles.hasHint]: props.hasHint,
      })}
      style={{ borderColor: props.borderColor, color }}
      autoComplete={props.autocomplete}
      type={props.type || 'text'}
      value={props.value || ''}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={(ev) => props.onChange(ev.target.value)}
    />
  );
};

export default CommonInput;
