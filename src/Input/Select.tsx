import React from 'react';
import RSelect, { StylesConfig } from 'react-select';
import { TInputProps } from '../types';
import COLORS from '../Colors';

function getSelect<T>(isMulti: boolean = false) {
  const Select = (props: TInputProps<T>) => {
    const customStyles: StylesConfig<any, any, any> = {
      control: () => ({
        background: 'none !important',
        borderBottom: `solid 0.13em`,
        borderColor: props.borderColor,
        cursor: 'text',
        display: 'flex',
        paddingTop: isMulti ? '1.2em' : '0',
        transition: '0.2s ease-in-out',
      }),
      indicatorSeparator: () => ({ display: 'none' }),
      indicatorsContainer: () => ({ display: 'none' }),
      input: (provided: any) => ({
        ...provided,
        color: 'inherit',
        marginTop: isMulti ? '-1em' : '0.2em',
        width: '5em',
      }),
      multiValue: () => ({
        background: props.colors?.accent || COLORS.ACCENT,
        display: 'flex',
        marginBottom: '0.2em',
        marginRight: '0.2em',
      }),
      multiValueLabel: (provided: any) => ({
        ...provided,
        color: 'inherit',
      }),
      multiValueRemove: (provided: any) => ({
        ...provided,
        '&:hover': {
          background: 'none',
          cursor: 'pointer',
          opacity: 1,
        },
        color: 'inherit !important',
        opacity: 0.5,
      }),
      option: (_: any, state) => ({
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
        alignItems: isMulti ? 'start' : 'flex-end',
        margin: '0',
        marginTop: '0.3em',
        padding: '0',
      }),
    };
    const onChange = (item: any) => {
      if (isMulti) {
        const values = {};
        [...(item.map((it: any) => it.value) as any)].forEach((v) => (values[v] = true));
        props.onChange(Object.keys(values) as any);
      } else {
        props.onChange(item && item.value);
      }
    };
    const options = props.options?.map(({ value, label }) => ({ value, label: label || value }));
    const value = options?.filter((option) =>
      Array.isArray(props.value) ? props.value.includes(option.value) : option.value === props.value
    );
    return (
      <RSelect
        name={props.name}
        menuPlacement="bottom"
        options={options}
        styles={customStyles}
        isMulti={isMulti}
        isDisabled={props.disabled}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={onChange}
        value={value}
      />
    );
  };
  return Select;
}

export const Tags = getSelect<string[]>(true);

export const Select = getSelect<string>();
