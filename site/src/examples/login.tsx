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
  const fields: TForm<TValue>['fields'] = [
    { name: 'email', required: true },
    { name: 'password', required: true, type: 'password' },
    { name: 'accept', type: 'check', label: 'I accept [whatever](https://google.com)', required: true },
  ];
  const { value, onChange } = props;
  return <Form<TValue> {...{ fields, value, onChange }} />;
};

const initialState = {};

const fields = `
const fields = [
  { name: 'name', required: true, size: 0.5 },
  { name: 'surname', size: 0.5 },
  { name: 'birthday', type: 'date' },
  { name: 'accept', type: 'check', required: true },
];
`.trim();

const tileClass = 'is-light';

export default { title, description, Component, source: { fields, initialState }, tileClass };
