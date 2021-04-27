import { clone } from 'lodash';
import React, { Component, Fragment } from 'react';
import Form from '.';
import { TForm } from './Form';

type State<T> = {
  fields: TForm<T>['fields'];
  isValid: boolean;
  value: TForm<T>['value'];
};

export class DynamicForm<T> extends Component<TForm<T>, State<T>> {
  constructor(props: TForm<T>) {
    super(props);
    this.state = {
      fields: [],
      isValid: false,
      value: props.value,
    };
    filterFields(props.fields, props.value).then((fields) => this.setState({ fields }));
  }

  private onChange: TForm<T>['onChange'] = async (value, isValid) => {
    const fields = await filterFields(this.props.fields, value);
    value = cleanValue(value, fields);
    this.setState({ fields, isValid, value });
    this.props.onChange(value, isValid);
  };

  public render = () => {
    return (
      <Fragment>
        <p>DYNAMIC FORM</p>
        <Form {...this.props} {...this.state} onChange={this.onChange} />
      </Fragment>
    );
  };
}

async function filterFields<T>(fields: TForm<T>['fields'], formValue?: Partial<T>): Promise<TForm<T>['fields']> {
  const nextFields = [];
  for (const f of fields) {
    if (!f.when) {
      nextFields.push(f);
      continue;
    }
    const promises = f.when.map((condition) => condition(formValue || {}));
    const partials = await Promise.all(promises);
    if (partials.every((re) => !!re)) {
      nextFields.push(f);
      continue;
    }
  }
  return nextFields;
}

function cleanValue<T>(value: Partial<T>, fields: TForm<T>['fields']): Partial<T> {
  const keys = fields.reduce((accum, f) => {
    accum[f.name] = true;
    return accum;
  }, {} as { [key: string]: boolean });
  const nextValue = clone(value);
  Object.keys(nextValue).forEach((key) => {
    if (!keys[key]) delete nextValue[key];
  });
  return nextValue;
}
