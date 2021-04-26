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
      {...props}
      className={cl({
        [styles.isErrored]: props.isErrored,
        [styles.hasHint]: props.hasHint,
      })}
      style={{ borderColor: props.borderColor, color }}
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
