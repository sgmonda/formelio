import { ChangeEventHandler } from 'react';
import { TInputProps } from '../types';

const CheckboxInput = (props: TInputProps<boolean>) => {
  const onChange: ChangeEventHandler<any> = (ev) => {
    const isChecked = !!ev.target.checked;
    props.onChange(isChecked);
  };

  return (
    <input
      id={props.id}
      required={props.required}
      disabled={props.disabled}
      max={props.max}
      min={props.min}
      name={props.name}
      autoComplete={props.autocomplete}
      type="checkbox"
      onChange={onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      checked={!!props.value}
      value={''}
    />
  );
};

export default CheckboxInput;
