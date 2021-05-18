import React from 'react';
import DatePicker from 'react-datepicker';
import './Date.module.css';
import styles from '../style/index.module.sass';
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
  const onChange = (date: Date | [Date, Date]) => {
    if (typeof date === 'string') props.onChange(new Date(Date.parse(date)));
    props.onChange(date as Date);
    // props.onBlur();
  };
  return (
    <div className={styles.datepicker}>
      <DatePicker
        id={props.id}
        selected={props.value ? new Date(props.value) : undefined}
        onChange={onChange}
        onFocus={props.onFocus}
        onCalendarClose={props.onBlur}
        onBlur={props.onBlur}
        dateFormat={props.format || 'yyyy-MM-dd'}
        wrapperClassName={'date_picker'}
        popperPlacement="bottom-start"
      />
      <DatePickerWrapperStyles />
    </div>
  );
};

export default DateInput;
