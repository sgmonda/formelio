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
  cities: string[];
  domicilio: {
    direccion: string;
    provincia: string;
    localidad: string;
    codigoPostal: string;
    other: { a: string; b: string };
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
  cities: ['Catarroja', 'El Sotillo'],
  city: 'El Sotillo',
};

const found = {};
const citiesOptions = cities
  .filter(({ name }) => {
    const isFound = !found[name];
    found[name] = true;
    return isFound;
  })
  .slice(0, 10)
  .map(({ name }) => ({ label: name, value: name }));
const fields: TForm<TValue>['fields'] = [
  { name: 'city', options: citiesOptions },
  { name: 'cities', options: citiesOptions, type: 'tags' },
  {
    help: 'This is a help message, shown only when there are exactly two cities selected',
    when: [(formValue: Partial<TValue>) => formValue?.cities?.length === 2],
  },
  {
    name: 'domicilio',
    fields: [
      { name: 'direccion', required: true },
      { name: 'provincia', required: true, size: 0.3 },
      { name: 'localidad', required: true, size: 0.3 },
      { name: 'codigoPostal', required: true, size: 0.3 },
      { name: 'other', fields: [{ name: 'a' }, { name: 'b' }] },
    ],
  },
];

const tileClass = 'is-info';

export default {
  Component,
  description,
  source: { fields, initialState },
  tileClass,
  title,
};
