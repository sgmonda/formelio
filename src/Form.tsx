import _ from 'lodash';
import React, { Component, createRef, Fragment, useEffect } from 'react';
import styles from '../style/index.module.sass';
import { Field } from './Field';
import { TColors, TField, TForm } from './types';

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
        const errors = field.name ? await validateField<any, any>(field, props.value?.[field.name], props.value) : [];
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
    if (!field.name) return;
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
    const fieldGroups = groupFields(fields);
    return (
      <div className={styles.formelio}>
        <form>
          {fieldGroups.map((group, i) => (
            <div
              key={i}
              style={{ padding: `${group.depth}em`, border: `solid 1px rgba(0, 0, 0, ${group.depth * 0.1})` }}
            >
              {group.fields.map((field) => (
                <Fragment key={`${group.depth}${field.name}${i}`}>
                  <div className={styles.fieldWrapper} style={{ flexBasis: (field.size || 1) * 100 + '%' }}>
                    {!field.name && renderLabel(field)}
                    {field.name && getField<T>(field, value, this.onChange.bind(this), this.props.colors)}
                  </div>
                </Fragment>
              ))}
            </div>
          ))}
        </form>
      </div>
    );
  };
}

const groupFields = (fields: TField<any, any>[]) => {
  type TGroup = { depth: number; fields: TField<any, any>[] };
  const groups: Array<TGroup> = [];
  let currentGroup: TGroup = { depth: 0, fields: [] };
  fields.forEach((field) => {
    if ((field.depth || 0) === currentGroup.depth) {
      currentGroup.fields.push(field);
    } else {
      groups.push(currentGroup);
      currentGroup = { depth: field.depth || 0, fields: [field] };
    }
  });
  groups.push(currentGroup);
  return groups;
};

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
    case 'tags':
      return <FieldWrapper<string[], T> {...{ colors, field, formValue: value, onChange }} />;
    default:
      return <FieldWrapper<string, T> {...{ colors, field, formValue: value, onChange }} />;
  }
}

const renderLabel = (field: TField<any, any>) => {
  return (
    <Fragment>
      {field.depth === 0 && <hr />}
      <label>{field.label}</label>
    </Fragment>
  );
};

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
      value={props.formValue[props.field.name as any] as any}
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
