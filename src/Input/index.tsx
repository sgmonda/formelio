import { TInputProps } from '../types';
import COLORS from '../Colors';
import Select from './Select';
import File from './File';
import Date from './Date';
import Checkbox from './Checkbox';
import Input from './Input';
import TextArea from './TextArea';
import React from 'react';

const getBorderColor = (props: TInputProps<any>) => {
  const { colors, isErrored, isFocused } = props;
  let borderColor = 'inherit';
  if (isErrored) borderColor = colors?.error || COLORS.ERROR;
  else if (isFocused) borderColor = colors?.accent || COLORS.ACCENT;
  return { borderColor };
};

export default (props: TInputProps<any>) => {
  const { options, type } = props;
  const inputProps = { ...props, ...getBorderColor(props) };
  if (options) return <Select {...inputProps} />;
  if (type === 'date') return Date(inputProps);
  if (type === 'files') return File(inputProps);
  if (type === 'check') return Checkbox(inputProps);
  if (type === 'text-multiline') return TextArea(inputProps);
  return Input(inputProps);
};
