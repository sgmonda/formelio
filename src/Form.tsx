import _ from 'lodash';
import React, { Component, createRef, useEffect } from 'react';
import styles from '../style/index.module.sass';
import { Field } from './Field';
import { TColors, TField } from './types';

type TypedTField<T> =
  | (TField<string, T> & { type: 'text' })
  | (TField<string, T> & { type: 'password' })
  | (TField<string, T> & { type: 'text-multiline' })
  | (TField<Date, T> & { type: 'date' })
  | (TField<File[], T> & { type: 'files' })
  | (TField<number, T> & { type: 'number' })
  | (TField<boolean, T> & { type: 'check' })
  | Omit<TField<string, T>, 'type'>;

export type TForm<T> = {
  delay?: number;
  colors?: TColors;
  fields: TypedTField<T>[]; // @TODO Could this "any" be avoided?
  onChange: (value: Partial<T>, isValid: boolean) => void;
  value?: Partial<T>;
};

type State<T> = {
  validity: { [key: string]: boolean };
  value: Partial<T>;
};

export class Form<T> extends Component<TForm<T>, State<T>> {
  constructor(props: TForm<T>) {
    super(props);
    this.state = {
      validity: { something: false }, // Not valid by default, until first validation
      value: this.props.value || {},
    };
    Promise.all(
      props.fields.map(async (field) => {
        const errors = await validateField<any, any>(field, props.value?.[field.name], props.value);
        return errors.length > 0;
      })
    ).then((errors) => {
      const validity = {};
      props.fields.forEach((field, i) => {
        validity[field.name as string] = !errors[i];
      });
      this.setState({ validity });
    });
  }

  private propagateOnChange = _.debounce(() => {
    const isValid = !Object.values(this.state.validity).some((b) => !b);
    this.props.onChange(this.state.value, isValid);
  }, this.props.delay || 500);

  private onChange<X>(field: TField<X, T>, value: X, isValid: boolean): void {
    this.setState({
      validity: { ...this.state.validity, [field.name]: isValid },
      value: { ...this.state.value, [field.name]: value },
    });
    this.propagateOnChange();
  }

  public componentDidUpdate = (prevProps: TForm<T>) => {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value || {} });
    }
  };

  public render = () => {
    const { fields } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.formelio}>
        <form>
          {fields.map((field) => (
            <div key={field.name} className={styles.fieldWrapper} style={{ flexBasis: (field.size || 1) * 100 + '%' }}>
              {getField<T>(field, value, this.onChange.bind(this), this.props.colors)}
            </div>
          ))}
        </form>
      </div>
    );
  };
}

// @TODO Don't use "any" here
function getField<T>(field: any, value: any, onChange: any, colors?: TColors) {
  switch (field.type) {
    case 'date':
      return <FieldWrapper<Date, T> {...{ colors, field, formValue: value, onChange }} />;
    case 'number':
      return <FieldWrapper<number, T> {...{ colors, field, formValue: value, onChange }} />;
    case 'files':
      return <FieldWrapper<File[], T> {...{ colors, field, formValue: value, onChange }} />;
    case 'check':
      return <FieldWrapper<boolean, T> {...{ colors, field, formValue: value, onChange }} />;
    default:
      return <FieldWrapper<string, T> {...{ colors, field, formValue: value, onChange }} />;
  }
}

/**
 * Intermediate component to let field handlers receive form data without passing
 * any form info to the Field class itself. This way <Field/> does not need to know about <Form/>
 */
function FieldWrapper<T, F>(props: {
  field: TField<T, F>;
  formValue: Partial<F>;
  onChange: (field: TField<T, F>, value: T, isValid: boolean) => void;
  colors?: TColors;
}) {
  const ref = createRef<Field<T, F>>();
  const onChange = (value: T, isValid: boolean) => props.onChange(props.field, value, isValid);
  const validator = async (value?: T): Promise<string[]> => {
    return validateField(props.field, value, props.formValue);
  };
  useEffect(() => {
    ref.current?.validate();
  }, [props.formValue]);
  return (
    <Field<T, F>
      {...props.field}
      colors={props.colors}
      formValue={props.formValue}
      ref={ref}
      value={props.formValue[props.field.name] as any}
      onChange={onChange}
      validator={validator}
    />
  );
}

async function validateField<T, F>(
  field: TField<T, F>,
  value: T | undefined,
  formValue?: Partial<F>
): Promise<string[]> {
  if (field.required && !value) return ['Required field'];
  if (!field.validator || !value) return [];
  return field.validator(value, formValue || {});
}
