import { TInputProps } from '../types';
import { Select, Tags } from './Select';
import File from './File';
import Date from './Date';
import Checkbox from './Checkbox';
import Input from './Input';
import TextArea from './TextArea';
import React from 'react';
import { getBorderColor } from '../modules';

export default (props: TInputProps<any>) => {
  const { options, type } = props;
  const inputProps = { ...props, ...getBorderColor(props) };
  if (options) {
    if (type === 'tags') return <Tags {...inputProps} />;
    return <Select {...inputProps} />;
  }
  if (type === 'date') return Date(inputProps);
  if (type === 'files') return File(inputProps);
  if (type === 'check') return Checkbox(inputProps);
  if (type === 'text-multiline') return TextArea(inputProps);
  return Input(inputProps);
};
