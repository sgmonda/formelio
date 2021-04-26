import React, { Fragment } from 'react';
import { Form, TForm } from 'formelio';
import cities from '../data/geo/municipios.json';

const title = 'Autocompletable dropdown';

const description = `
This example shows how to use dropdowns with autocomplete support.
Perfect for huge lists of items, helping users to find the proper list item.
`;

type TValue = {
  city: string;
};

type Props = {
  value: TForm<TValue>['value'];
  onChange: TForm<TValue>['onChange'];
};

const Component = (props: Props) => {
  const found = {};
  const fields: TForm<TValue>['fields'] = [
    {
      name: 'city',
      label: 'City dropdown',
      options: cities
        .filter(({ name }) => {
          const isFound = !found[name];
          found[name] = true;
          return isFound;
        })
        .slice(0, 100)
        .map(({ name }) => ({ value: name, label: name })),
    },
  ];
  const { value, onChange } = props;
  return (
    <Fragment>
      <Form<TValue> {...{ fields, value, onChange }} />
    </Fragment>
  );
};

const initialState = `{}`;

const fields = `
const fields = [
  { name: 'name', required: true, size: 0.5 },
  { name: 'surname', size: 0.5 },
  { name: 'birthday', type: 'date' },
  { name: 'comment', type: 'text-multiline' },
];
`.trim();

const tileClass = 'is-dark';

export default { title, description, Component, source: { fields, initialState }, tileClass };
