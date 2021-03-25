import React from 'react';
import styles from '../style/index.module.sass';
import cl from 'classnames';
import RSelect, { StylesConfig } from 'react-select';
import { InputAttributes } from './typings';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// @TODO Move this to other place to support theming
const COLOR_PRIMARY = '#5196D5';
const COLOR_INPUT = '#ECEFEE';
const COLOR_ERROR = '#D65947';

type Props<T> = InputAttributes & {
  value?: T;
  hasHint?: boolean;
  isErrored: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: T) => Promise<T>;
};

const CommonInput = (props: Props<any>) => {
  return (
    <input
      {...props}
      className={cl({
        [styles.isErrored]: props.isErrored,
      })}
      type={props.type || 'text'}
      defaultValue={props.value as any}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={(ev) => props.onChange(ev.target.value)}
    />
  );
};

const DateInput = (props: Props<any>) => {
  return (
    <div className={styles.datepicker}>
      <DatePicker
        selected={props.value ? new Date(props.value) : undefined}
        onChange={(date: Date) => props.onChange(date)}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        showTimeInput={true}
        dateFormat={props.format}
      />
    </div>
  );
};

const Select = (props: Props<string>) => {
  const customStyles: StylesConfig<any, any, any> = {
    control: (_: any, state: any) => ({
      background: 'none !important',
      borderBottom: `solid 0.13em ${props.isErrored ? COLOR_ERROR : state.isFocused ? COLOR_PRIMARY : COLOR_INPUT}`,
      cursor: 'text',
      display: 'flex',
      transition: '0.2s ease-in-out',
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    indicatorsContainer: () => ({ display: 'none' }),
    option: (_: any, state) => ({
      background: state.isSelected ? COLOR_PRIMARY : state.isFocused ? COLOR_PRIMARY + '1F' : 'white',
      color: state.isSelected ? 'white' : 'inerit',
      padding: '0.25em 0.5em',
    }),
    placeholder: () => ({ display: 'none' }),
    singleValue: () => ({ color: props.isErrored ? COLOR_ERROR : 'inherit' }),
    valueContainer: (provided: any) => ({
      ...provided,
      alignItems: 'flex-end',
      margin: '0',
      marginTop: '0.5em',
      padding: '0',
    }),
  };
  const onChange = (item: any) => {
    props.onChange(item && item.value);
  };
  return (
    <RSelect
      name={props.name}
      menuPlacement={props.hasHint ? 'top' : 'auto'}
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

const Input = (props: Props<any>) => {
  const { options } = props;
  if (options) return Select(props);
  if (props.type === 'date') return DateInput(props);
  return CommonInput(props);
};

export default Input;
