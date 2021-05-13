import { clone } from 'lodash';
import React, { Component, Fragment } from 'react';
import { BasicForm } from './BasicForm';
import { flatten, unflatten } from './modules';
import { TField, TForm } from './types';

type State<T> = {
  fields: TForm<T>['fields'];
  isValid: boolean;
  value: Partial<T> & { [key: string]: any };
};

export class Form<T> extends Component<TForm<T>, State<T>> {
  constructor(props: TForm<T>) {
    super(props);
    this.state = {
      fields: [],
      isValid: false,
      value: flatten(props.value || {}) as any,
    };
    console.log('FLATTEN', this.state);
    cleanFields(props.fields, this.state.value).then((fields) => this.setState({ fields }));
  }

  private onChange: TForm<T>['onChange'] = async (value, isValid) => {
    const fields = await cleanFields(this.props.fields, value);
    value = cleanValue(value, fields);
    this.setState({ fields, isValid, value });
    this.props.onChange(unflatten(value), isValid);
  };

  public componentDidUpdate = (prevProps: TForm<T>) => {
    if (prevProps.value !== this.props.value || prevProps.fields !== this.props.fields) {
      const value = flatten(this.props.value || {}) as any;
      cleanFields(this.props.fields, this.props.value).then((fields) => this.setState({ fields, value }));
    }
  };

  public render = () => {
    return (
      <Fragment>
        <BasicForm {...this.props} {...this.state} onChange={this.onChange} />
      </Fragment>
    );
  };
}

// eslint-disable-next-line complexity
async function cleanFields<T>(
  fields: TForm<T>['fields'],
  formValue?: Partial<T>,
  depth: number = 0
): Promise<TForm<T>['fields']> {
  let nextFields: TForm<T>['fields'] = [];

  // eslint-disable-next-line complexity
  const insertField = async (f: TField<any, any>) => {
    let isPresent = false;
    if (f.when) {
      const promises = f.when.map((condition) => condition(formValue || {}));
      const partials = await Promise.all(promises);
      isPresent = partials.every((re) => !!re);
    } else {
      isPresent = true;
    }
    if (!isPresent) return;

    if (!f.fields) {
      nextFields.push(f as any);
      return;
    }

    let subfields = await cleanFields(f.fields || [], formValue?.[f.name as any] || {}, (f.depth || 0) + 1);

    if (f.length) {
      const length = f.length(formValue || {});
      for (let i = 0; i < length; i++) {
        nextFields.push({
          depth: f.depth || 0,
          label: `${f.label || f.name} (${i + 1})`,
        });
        for (const sf of subfields) {
          await insertField({
            ...sf,
            depth: (sf.depth || 0) - 1,
            label: sf.label || sf.name,
            name: sf.name && (`${f.name}.${i}.${sf.name}` as any),
          });
        }
      }
    } else {
      nextFields.push({
        depth: f.depth,
        label: `${f.label || f.name}`,
      });
      for (const sf of subfields) {
        await insertField({
          ...sf,
          depth: sf.depth || 0,
          label: sf.label || sf.name,
          name: sf.name && (`${f.name}.${sf.name}` as any),
        });
      }
    }
  };

  for (const f of fields) {
    await insertField({ ...f, depth });
  }
  return nextFields;
}

function cleanValue<T>(value: Partial<T>, fields: TForm<any>['fields']): Partial<T> {
  const keys = fields.reduce((accum, f) => {
    if (f.name) accum[f.name] = true;
    return accum;
  }, {} as { [key: string]: boolean });
  const nextValue = clone(value);
  Object.keys(nextValue).forEach((key) => {
    if (!keys[key]) delete nextValue[key];
  });
  return nextValue;
}
