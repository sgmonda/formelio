import React from 'react';
import { TInputProps } from '../types';

const CheckboxInput = (props: TInputProps<boolean>) => {
  return (
    <input
      {...props}
      id={props.name}
      autoComplete={props.autocomplete}
      type="checkbox"
      defaultValue={props.value as any}
      onChange={(ev) => props.onChange(!!ev.target.value)}
      value={''}
    />
  );
};

export default CheckboxInput;
