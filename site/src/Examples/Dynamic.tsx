import React, { Fragment } from 'react';
import { Form, TForm } from 'formelio';

const title = 'Dynamic form';

const description = `
Sometimes you want to show a field more than once, but you don't know how many times because
it depends on user input. This kind of dynamic forms are perfect for \`Formelio\`.
`;

type TValue = {
  childrenCount: number;
  children: Array<{ name: string; birthdate: Date }>;
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
  children: [
    {
      name: 'Sam',
      birthdate: '2001-02-12',
    },
    {
      name: 'Karen',
      birthdate: '1995-01-03',
    },
  ],
};

const fields: TForm<TValue>['fields'] = [
  {
    name: 'childrenCount',
    type: 'number',
  },
  {
    name: 'children',
    length: (formValue: Partial<TValue>) => formValue.childrenCount || 0,
    fields: [
      { name: 'name', size: 0.5 },
      { name: 'birthdate', type: 'date', size: 0.5 },
    ],
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
