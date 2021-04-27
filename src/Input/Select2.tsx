import React, { ChangeEvent, Fragment, memo, useState } from 'react';
import { TInputProps } from '../types';
import styles from '../styles.module.css';
import cl from 'classnames';
import { debounce } from 'lodash';

const Select = (props: TInputProps<string>) => {
  const listId = `datalist-${props.name}`;
  let options = props.options;
  console.log('FILTER OPTIONS', props);
  const [value, setValue] = useState(props.value);
  // if (typeof props.value === 'string') {
  //   const query = props.value.toLowerCase();
  //   // options = props.options?.filter(({ label, value }) => {
  //   //   let isAccepted = label.includes(query) || value.includes(query);
  //   //   return isAccepted;
  //   // });
  // }
  const propagateOnChange = debounce((val) => {
    console.log('PROPAGATE', val);
    props.onChange(val || '');
  }, 1000);
  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
    propagateOnChange(ev.target.value);
  };
  // useEffect(() => {
  //   if (props.value === value) return;
  //   setValue(props.value);
  //   console.log('VALUE CHANGED');
  // }, [props.value]);
  return (
    <Fragment>
      <datalist id={listId}>
        {options?.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </datalist>
      <input
        required={props.required}
        disabled={props.disabled}
        max={props.max}
        min={props.min}
        name={props.name}
        className={cl({
          [styles.isErrored]: props.isErrored,
          [styles.hasHint]: props.hasHint,
        })}
        list={listId}
        style={{ borderColor: props.borderColor, color: 'inherit' }}
        autoComplete="off"
        type={props.type || 'text'}
        // defaultValue={props.value}
        value={value || ''}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default memo(Select, (prevProps, nextProps) => {
  return prevProps.value !== nextProps.value || prevProps.options !== nextProps.options;
});
