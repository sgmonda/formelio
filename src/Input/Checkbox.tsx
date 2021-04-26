import React, { ChangeEventHandler } from 'react';
import { TInputProps } from '../types';

const CheckboxInput = (props: TInputProps<boolean>) => {
  const onChange: ChangeEventHandler<any> = (ev) => {
    const isChecked = !!ev.target.checked;
    props.onChange(isChecked);
  };

  return (
    <input
      {...props}
      id={props.name}
      autoComplete={props.autocomplete}
      type="checkbox"
      defaultValue={props.value as any}
      onChange={onChange}
      value={''}
    />
  );
};

export default CheckboxInput;
