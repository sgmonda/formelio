import React, { Component, createRef, useEffect } from 'react';
import styles from '../style/index.module.sass';
import { Field } from './Field';
import { TField } from './types';
import cl from 'classnames';

type TypedTField<T> =
  | (TField<string, T> & { type: 'text' })
  | (TField<Date, T> & { type: 'date' })
  | (TField<File[], T> & { type: 'files' })
  | (TField<number, T> & { type: 'number' })
  | Omit<TField<string, T>, 'type'>;

export type TForm<T> = {
  fields: TypedTField<T>[]; // @TODO Could this "any" be avoided?
  onChange: (value: Partial<T>) => Promise<void>;
  value?: Partial<T>;
};

type State<T> = {
  validity: { [key: string]: boolean };
  value: Partial<T>;
};

export class Form<T> extends Component<TForm<T>, State<T>> {
  public state = { validity: {}, value: this.props.value || {} };

  private onChange<X>(field: TField<X, T>, value: X, isValid: boolean): void {
    this.setState({
      validity: { ...this.state.validity, [field.name]: isValid },
      value: { ...this.state.value, [field.name]: value },
    });
    this.props.onChange(this.state.value);
  }

  public render = () => {
    const { fields } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.formelio}>
        <div className={styles.fieldsWrapper}>
          {fields.map((field) => (
            <div key={field.name} className={styles.fieldWrapper} style={{ flexBasis: (field.size || 1) * 100 + '%' }}>
              <div className={cl({ [styles.field]: true, [styles.isDisabled]: field.disabled })}>
                {/* @TODO Refactor this */}
                {(!('type' in field) || field.type === 'text') && (
                  <FieldWrapper<string, T> {...{ field, formValue: value, onChange: this.onChange.bind(this) }} />
                )}
                {'type' in field && field.type === 'date' && (
                  <FieldWrapper<Date, T> {...{ field, formValue: value, onChange: this.onChange.bind(this) }} />
                )}
                {'type' in field && field.type === 'number' && (
                  <FieldWrapper<number, T> {...{ field, formValue: value, onChange: this.onChange.bind(this) }} />
                )}
                {'type' in field && field.type === 'files' && (
                  <FieldWrapper<File[], T> {...{ field, formValue: value, onChange: this.onChange.bind(this) }} />
                )}
                {/* <Field<string>
                  {...field}
                  value={value[field.name]}
                  formValue={value}
                  onChange={}
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
}

/**
 * Intermediate component to let field handlers receive form data without passing
 * any form info to the Field class itself. This way <Field/> does not need to know about <Form/>
 */
function FieldWrapper<T, F>(props: {
  field: TField<T, F>;
  formValue: Partial<F>;
  onChange: (field: TField<T, F>, value: T, isValid: boolean) => void;
}) {
  const ref = createRef<Field<T, F>>();
  const onChange = (value: T, isValid: boolean) => props.onChange(props.field, value, isValid);
  const validator = async (value?: T): Promise<string[]> => {
    if (!props.field.validator) return [];
    return props.field.validator(value, props.formValue);
  };
  useEffect(() => {
    ref.current?.validate();
  }, [props.formValue]);
  return (
    <Field<T, F>
      {...props.field}
      ref={ref}
      value={props.formValue[props.field.name] as any}
      onChange={onChange}
      validator={validator}
    />
  );
}
