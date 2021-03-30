import React, { ChangeEventHandler, createRef, FocusEventHandler, Fragment } from 'react';
import styles from '../style/index.module.sass';
import cl from 'classnames';
import RSelect, { StylesConfig } from 'react-select';
import { createGlobalStyle } from 'styled-components';
import { TInput } from './types';
import DatePicker from 'react-datepicker';
import COLORS from './Colors';
import 'react-datepicker/dist/react-datepicker.css';

type Props<T> = TInput<T> & {
  value?: T;
  hasHint?: boolean;
  isErrored: boolean;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: T) => Promise<T>;
};

const getBorderColor = (props: Props<any>) => {
  const { colors, isErrored, isFocused } = props;
  let borderColor = 'inherit';
  if (isErrored) borderColor = colors?.error || COLORS.ERROR;
  else if (isFocused) borderColor = colors?.accent || COLORS.ACCENT;
  return borderColor;
};

const CommonInput = (props: Props<any>) => {
  return (
    <input
      {...props}
      className={cl({
        [styles.isErrored]: props.isErrored,
        [styles.hasHint]: props.hasHint,
      })}
      style={{ borderColor: getBorderColor(props), color: 'inherit' }}
      autoComplete={props.autocomplete}
      readOnly={!props.isFocused}
      type={props.type || 'text'}
      defaultValue={props.value as any}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={(ev) => props.onChange(ev.target.value)}
    />
  );
};

const TextArea = (props: Props<any>) => {
  return (
    <textarea
      {...props}
      className={cl({
        [styles.isErrored]: props.isErrored,
        [styles.hasHint]: props.hasHint,
      })}
      style={{ borderColor: getBorderColor(props), color: 'inherit' }}
      autoComplete={props.autocomplete}
      readOnly={!props.isFocused}
      defaultValue={props.value as any}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={(ev) => props.onChange(ev.target.value)}
    ></textarea>
  );
};

const CheckboxInput = (props: Props<any>) => {
  return (
    <input
      {...props}
      id={props.name}
      autoComplete={props.autocomplete}
      type="checkbox"
      defaultValue={props.value as any}
      onChange={(ev) => props.onChange(ev.target.value)}
    />
  );
};

const DateInput = (props: Props<any>) => {
  const DatePickerWrapperStyles = createGlobalStyle`
    .date_picker input {
      color: inherit;
      border-color: ${getBorderColor(props)};
    }
  `;
  const onChange = (date: Date) => {
    props.onChange(date);
    props.onBlur();
  };
  return (
    <div className={styles.datepicker}>
      <DatePicker
        selected={props.value ? new Date(props.value) : undefined}
        onChange={onChange}
        onFocus={props.onFocus}
        onCalendarClose={props.onBlur}
        onBlur={props.onBlur}
        dateFormat={props.format}
        readOnly={!props.isFocused}
        wrapperClassName={'date_picker'}
        popperPlacement="bottom-start"
      />
      <DatePickerWrapperStyles />
    </div>
  );
};

const FileInput = (props: Props<any>) => {
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
        {...props}
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
        style={{ borderColor: getBorderColor(props), color: 'inherit' }}
        value={props.value ? props.value.map((f: File) => `"${f.name}"`).join(', ') : undefined}
        ref={ref2}
        onFocus={onFocus}
        readOnly={true}
      />
    </Fragment>
  );
};

const Select = (props: Props<string>) => {
  const customStyles: StylesConfig<any, any, any> = {
    control: () => ({
      background: 'none !important',
      borderBottom: `solid 0.13em`,
      borderColor: getBorderColor(props),
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

const Input = (props: Props<any>) => {
  const { options } = props;
  if (options) return Select(props);
  if (props.type === 'date') return DateInput(props);
  if (props.type === 'files') return FileInput(props);
  if (props.type === 'check') return CheckboxInput(props);
  if (props.type === 'text-multiline') return TextArea(props);
  return CommonInput(props);
};

export default Input;
