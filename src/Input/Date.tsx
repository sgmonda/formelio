import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles.module.css';
import { createGlobalStyle } from 'styled-components';
import { TInputProps } from '../types';

const DateInput = (props: TInputProps<Date>) => {
  const DatePickerWrapperStyles = createGlobalStyle`
    .date_picker {
      width: 100%
    }
    .date_picker input {
      color: inherit;
      border-color: ${props.borderColor};
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

export default DateInput;
