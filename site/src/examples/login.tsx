import React from 'react';
import { Form, TForm } from 'formelio';

const title = 'Login';

const description = `
Simple login form with two fields
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
  { label: 'I accept [whatever](https://google.com)', name: 'accept', required: true, type: 'check' },
];

const tileClass = 'is-light';

export default {
  Component,
  description,
  source: { fields, initialState },
  tileClass,
  title,
};
