import React from 'react';
import DatePicker from 'react-datepicker';
import './Date.module.css';
import styles from '../style/index.module.sass';
import { createGlobalStyle } from 'styled-components';
import { TInputProps } from '../types';
import { range } from 'lodash';
import { getMonth, getYear, setMonth, setYear } from 'date-fns';
import { getMonthList } from '../modules/getMonthList';

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
  const years = range(1900, getYear(new Date()) + 1, 1);
  const months = getMonthList();

  const renderCustomHeader = ({ date, changeYear, changeMonth }: any) => (
    <div className={styles.header}>
      <select
        value={getYear(date)}
        onChange={({ target: { value } }) => {
          var d = setYear(new Date(props.value || new Date()), parseInt(value));
          onChange(d);
          changeYear(value);
        }}
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        value={months[getMonth(date)]}
        onChange={({ target: { value } }) => {
          const month = months.indexOf(value);
          var d = setMonth(new Date(props.value || new Date()), month);
          onChange(d);
          changeMonth(month);
        }}
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

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
        renderCustomHeader={renderCustomHeader}
      />
      <DatePickerWrapperStyles />
    </div>
  );
};

export default DateInput;
