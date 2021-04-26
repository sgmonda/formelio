import React from 'react';
import { Select as RSelect } from 'react-select-virtualized';
import { TInputProps } from '../types';
import COLORS from '../Colors';

const Select = (props: TInputProps<string>) => {
  const customStyles = {
    control: () => ({
      background: 'none !important',
      borderBottom: `solid 0.13em`,
      borderColor: props.borderColor,
      cursor: 'text',
      display: 'flex',
      transition: '0.2s ease-in-out',
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    indicatorsContainer: () => ({ display: 'none' }),
    input: (provided: any) => ({
      ...provided,
      color: 'inherit',
    }),
    option: (_: any, state: any) => ({
      background: state.isSelected
        ? props.colors?.accent || COLORS.ACCENT
        : state.isFocused
        ? (props.colors?.accent || COLORS.ACCENT) + '1F'
        : 'white',
      color: state.isSelected ? 'white' : '#555',
      padding: '0.25em 0.5em',
    }),
    placeholder: () => ({ display: 'none' }),
    singleValue: () => ({
      color: props.isErrored ? props.colors?.error || COLORS.ERROR : 'inherit',
      overflow: 'hidden',
      position: 'absolute',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%',
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      alignItems: 'flex-end',
      margin: '0',
      marginTop: '0.3em',
      padding: '0',
    }),
  };
  const onChange = (item: any) => {
    props.onChange(item && item.value);
  };
  return (
    <RSelect
      name={props.name}
      menuPlacement="bottom"
      options={props.options}
      styles={customStyles}
      isDisabled={props.disabled}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={onChange}
      value={props.options?.filter((option) => option.value === props.value)}
    />
  );
};

export default Select;
