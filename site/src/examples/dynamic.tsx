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
  childrenCount: number;
  people: Array<{
    firstName: string;
    surname: string;
  }>;
  responsible: {
    firstName: string;
    surname: string;
    children: Array<{
      firstName: string;
      surname: string;
    }>;
  };
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

const initialState = { typeA: 'tres', childrenCount: 2 };

const fields: TForm<TValue>['fields'] = [
  { name: 'childrenCount', type: 'number' },
  {
    fields: [
      { name: 'firstName', size: 0.5 },
      { name: 'surname', size: 0.5 },
      {
        fields: [
          { name: 'rfirstName', size: 0.5 },
          { name: 'rsurname', size: 0.5 },
        ],
        length: () => 5,
        name: 'children',
      },
    ],
    name: 'responsible',
  },
  { name: 'commonField', type: 'number' },
  {
    fields: [
      { name: 'name', size: 0.5 },
      { name: 'surname', size: 0.5 },
      {
        name: 'hair',
        fields: [
          { name: 'colour', size: 0.5 },
          { name: 'length', type: 'number', size: 0.5 },
          {
            name: 'style',
            fields: [
              { name: 'sharpness', size: 0.5 },
              { name: 'width', size: 0.5 },
            ],
          },
        ],
      },
    ],
    length: (formValue: Partial<TValue>) => formValue.childrenCount || 0,
    name: 'people',
  },
];

const tileClass = 'is-light';

export default { title, description, Component, source: { fields, initialState }, tileClass };
