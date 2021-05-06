import { TInputProps } from '../types';
import COLORS from '../Colors';

export const getBorderColor = (props: Partial<TInputProps<any>>) => {
  const { colors, isErrored, isFocused } = props;
  let borderColor = 'inherit';
  if (isErrored) borderColor = colors?.error || COLORS.ERROR;
  else if (isFocused) borderColor = colors?.accent || COLORS.ACCENT;
  return { borderColor };
};
