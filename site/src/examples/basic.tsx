import React from 'react';
import { Form, TForm } from 'formelio';

const title = 'Basic usage';

const description = `
Hello bla bla, this is an example

with two lines
`;

type TValue = {
  name: string;
  surname: string;
  comment: string;
  birthday: Date;
};

type Props = {
  value: TForm<TValue>['value'];
  onChange: TForm<TValue>['onChange'];
};

const Component = (props: Props) => {
  const fields: TForm<TValue>['fields'] = [
    { name: 'name', required: true, size: 0.5 },
    { name: 'surname', size: 0.5 },
    { name: 'birthday', type: 'date' },
    { name: 'comment', type: 'text-multiline' },
  ];
  const { value, onChange } = props;
  return <Form<TValue> {...{ fields, value, onChange }} />;
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

const tileClass = 'is-light';

export default { title, description, Component, source: { fields, initialState }, tileClass };
