import React, { ChangeEventHandler } from 'react';
import cl from 'classnames';
import { TInputProps } from '../types';
import styles from '../styles.module.css';
import COLORS from '../Colors';

const CommonInput = (props: TInputProps<string>) => {
  const { colors } = props;
  let color = 'inherit';
  if (props.isErrored) color = colors?.error || COLORS.ERROR;

  const onChange: ChangeEventHandler<any> = (ev) => {
    let value = ev.target.value;
    if (props.type === 'number') value = parseFloat(value);
    props.onChange(value);
  };

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
      onChange={onChange}
    />
  );
};

export default CommonInput;
