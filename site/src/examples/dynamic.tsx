import React, { Fragment } from 'react';
import { DynamicForm, TForm } from 'formelio';

const title = 'Autocompletable dropdown';

const description = `
This example shows how to use dropdowns with autocomplete support.
Perfect for huge lists of items, helping users to find the proper list item.
`;

type TValue = {
  typeA: string;
  name1: string;
  name2: string;
  commonField: number;
  twoAndThree: string;
};

type Props = {
  value: TForm<TValue>['value'];
  onChange: TForm<TValue>['onChange'];
};

const Component = (props: Props) => {
  const { value, onChange } = props;
  return (
    <Fragment>
      <DynamicForm<TValue> {...{ fields, value, onChange }} />
    </Fragment>
  );
};

const initialState = {};

const fields: TForm<TValue>['fields'] = [
  { name: 'typeA', options: [{ value: 'uno' }, { value: 'dos' }, { value: 'tres' }], size: 0.5 },
  { name: 'name1', when: [(formValue: Partial<TValue>) => formValue.typeA === 'uno'], size: 0.5 },
  { name: 'name2', when: [(formValue: Partial<TValue>) => formValue.typeA === 'dos'], size: 0.5 },
  { name: 'commonField', type: 'number' },
  {
    name: 'twoAndThree',
    when: [
      (formValue: Partial<TValue>) => formValue.typeA === 'dos',
      async (formValue: Partial<TValue>) => formValue.commonField === 3,
    ],
  },
];

const tileClass = 'is-light';

export default { title, description, Component, source: { fields, initialState }, tileClass };
