import React, { ChangeEventHandler, createRef, FocusEventHandler, Fragment } from 'react';
import cl from 'classnames';
import { TInputProps } from '../types';
import styles from '../styles.module.css';

const FileInput = (props: TInputProps<File[]>) => {
  const ref = createRef<HTMLInputElement>();
  const ref2 = createRef<HTMLInputElement>();
  const onFocus: FocusEventHandler<HTMLInputElement> = () => {
    ref2.current?.blur();
    ref.current?.click();
    props.onFocus();
    document.body.onfocus = onCancel;
  };
  const onChange: ChangeEventHandler<any> = (ev) => {
    const files = ev.target.files;
    props.onChange([...files]);
  };
  const onCancel = () => {
    props.onBlur();
    document.body.onfocus = null;
  };
  return (
    <Fragment>
      <input
        id={props.id}
        required={props.required}
        disabled={props.disabled}
        max={props.max}
        min={props.min}
        name={props.name}
        autoComplete={undefined}
        value=""
        ref={ref}
        style={{ display: 'none' }}
        type="file"
        multiple={true}
        accept={props.extensions?.join(',') || undefined}
        onChange={onChange}
        onBlur={onCancel}
      />
      <input
        autoComplete={props.autocomplete}
        className={cl({
          [styles.isErrored]: props.isErrored,
          [styles.hasHint]: props.hasHint,
        })}
        style={{ borderColor: props.borderColor, color: 'inherit' }}
        value={props.value ? props.value.map((f: File) => `"${f.name}"`).join(', ') : undefined}
        ref={ref2}
        onFocus={onFocus}
        readOnly={true}
      />
    </Fragment>
  );
};

export default FileInput;
