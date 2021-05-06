import React, { Fragment } from 'react';
import { Form, TForm } from 'formelio';

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
  const { onChange, value } = props;
  return (
    <Fragment>
      <Form<TValue> {...{ fields, onChange, value }} />
    </Fragment>
  );
};

const initialState = {
  childrenCount: 2,
  typeA: 'tres',
};

const fields: TForm<TValue>['fields'] = [
  {
    name: 'childrenCount',
    type: 'number',
  },
  {
    fields: [
      {
        name: 'firstName',
        size: 0.5,
      },
      {
        name: 'surname',
        size: 0.5,
      },
      {
        fields: [
          {
            name: 'rfirstName',
            required: true,
            size: 0.5,
          },
          {
            name: 'rsurname',
            size: 0.5,
          },
          {
            name: 'other',
          },
        ],
        length: () => 5,
        name: 'children',
      },
    ],
    name: 'responsible',
  },
  {
    name: 'commonField',
    type: 'number',
  },
  {
    help: 'Esto es **texto** con markdown para [explicar algo](/)',
    label: 'sobre este estado',
  },
  {
    fields: [
      {
        name: 'name',
        size: 0.5,
      },
      {
        name: 'surname',
        size: 0.5,
      },
      {
        fields: [
          { name: 'colour', size: 0.5 },
          { name: 'length', size: 0.5, type: 'number' },
          {
            help: 'Esto es **texto** con markdown para [explicar algo](/)',
            label: 'sobre este estado',
          },
          {
            fields: [
              { name: 'sharpness', size: 0.5 },
              { help: 'Esto es **texto** con markdown para [explicar algo](/)' },
              { name: 'width', size: 0.5 },
            ],
            name: 'style',
          },
        ],
        name: 'hair',
      },
    ],
    length: (formValue: Partial<TValue>) => formValue.childrenCount || 0,
    name: 'people',
  },
];

const tileClass = 'is-light';

export default {
  Component,
  description,
  source: { fields, initialState },
  tileClass,
  title,
};
