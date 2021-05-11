import React from 'react';
import { Form, TForm } from 'formelio';

const title = 'Fields size';

const description = `
You can *suggest* field sizes, using \`size\` property. If the screen is large
enough to respect your suggestion, Formelio will do it. Otherwise it will ensure
form is cool, even if you  suggest sizes just partially.
`;

type TValue = {
  name: string;
  email: string;
  surname1: string;
  surname2: string;
  birthday: Date;
  phone: string;
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
    size: 0.3,
  },
  {
    name: 'surname1',
    size: 0.3,
  },
  {
    name: 'surname2',
    size: 0.3,
  },
  {
    name: 'email',
  },
  {
    name: 'birthday',
    type: 'date',
    size: 0.5,
  },
  {
    name: 'phone',
    size: 0.5,
  },
  {
    label: 'I accept whatever',
    name: 'accept',
    type: 'check',
  },
];

const tileClass = 'is-dark';

export default {
  Component,
  description,
  source: { fields, initialState },
  tileClass,
  title,
};
