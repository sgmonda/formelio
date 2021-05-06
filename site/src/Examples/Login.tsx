import React from 'react';
import { Form, TForm } from 'formelio';

const title = 'Basic form';

const description = `
This is the simplest use case: a login form. **Colors are inherited** from the parent,
so forms can be integrated easily in any page.
Even if you're using a dark theme, you don't need to worry about it.

<br/>

Note that you can use
[Markdown](https://guides.github.com/features/mastering-markdown/) in labels (to link pages, for instance).
Cool, isn't it?
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
