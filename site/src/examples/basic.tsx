import React from 'react';
import { Form, TForm } from 'formelio';

const title = 'Basic usage';

const description = `
Hello bla bla, this is an example

with two lines
`;

type TValue = {
  name: string;
  surname1: string;
  surname2: string;
  birthday: Date;
  accept: boolean;
};

type Props = {
  onChange: TForm<TValue>['onChange'];
  value: TForm<TValue>['value'];
};

const Component = (props: Props) => {
  const { onChange, value } = props;
  return <Form<TValue> {...{ fields, onChange, value }} />;
};

const initialState = {};

const fields: TForm<TValue>['fields'] = [
  {
    name: 'name',
    required: true,
    size: 0.333,
  },
  {
    autocomplete: 'additional-name',
    name: 'surname1',
    size: 0.333,
  },
  {
    autocomplete: 'family-name',
    name: 'surname2',
    size: 0.333,
  },
  {
    name: 'birthday',
    type: 'date',
  },
  {
    label: 'I accept whatever',
    name: 'accept',
    type: 'check',
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
