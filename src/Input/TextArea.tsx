import React, { ChangeEvent, ChangeEventHandler, useEffect, useRef, useState } from 'react';
import cl from 'classnames';
import { TInputProps } from '../types';
import styles from '../style/index.module.sass';

const TextArea = (props: TInputProps<string>) => {
  const [caretPosition, setCaretPosition] = useState<number>(props.value?.length || 0);
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const onChange: ChangeEventHandler<any> = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setCaretPosition(ref?.current?.selectionStart || props.value?.length || 0);
    props.onChange(ev.target.value);
  };

  useEffect(() => {
    try {
      ref?.current?.setSelectionRange(caretPosition, caretPosition);
    } catch (err) {
      console.warn(`Selection range cannot be set`);
    }
  }, [props.value]);

  return (
    <textarea
      id={props.id}
      ref={ref}
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
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
