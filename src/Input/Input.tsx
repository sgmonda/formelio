import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import cl from 'classnames';
import { TInputProps } from '../types';
import styles from '../style/index.module.sass';
import COLORS from '../Colors';

const CommonInput = (props: TInputProps<string>) => {
  const { colors } = props;
  let color = 'inherit';
  if (props.isErrored) color = colors?.error || COLORS.ERROR;

  const [caretPosition, setCaretPosition] = useState<number>(props.value?.length || 0);
  const ref = useRef<HTMLInputElement | null>(null);

  const onChange: ChangeEventHandler<any> = (ev) => {
    setCaretPosition(ref?.current?.selectionStart || props.value?.length || 0);
    let value = ev.target.value;
    if (props.type === 'number') value = parseFloat(value);
    props.onChange(value);
  };

  useEffect(() => {
    try {
      ref?.current?.setSelectionRange(caretPosition, caretPosition);
    } catch (err) {
      console.warn(`Selection range cannot be set`);
    }
  }, [props.value]);

  return (
    <input
      id={props.id}
      ref={ref}
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
