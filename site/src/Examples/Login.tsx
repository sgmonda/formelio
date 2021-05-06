import React from 'react';
import { Form, TForm } from 'formelio';

const title = '';

const description = `
`;

type TValue = {
  email: string;
  password: string;
  accept: boolean;
};

type Props = {
  value: TForm<TValue>['value'];
  onChange: TForm<TValue>['onChange'];
};

const Component = (props: Props) => {
  const { value, onChange } = props;
  return <Form<TValue> {...{ fields, onChange, value }} />;
};

const initialState = {};

const fields: TForm<TValue>['fields'] = [
  { name: 'email', required: true },
  { name: 'password', required: true, type: 'password' },
  { name: 'accept', required: true, type: 'check', label: 'I accept [whatever](https://google.com)' },
];

const tileClass = 'is-light';

export default {
  Component,
  description,
  source: { fields, initialState },
  tileClass,
  title,
};
