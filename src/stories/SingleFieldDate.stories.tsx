import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Form, { TForm } from '..';
import { clone } from '../modules';

export default {
  component: Form,
  title: 'Single Field > Date',
} as Meta;

export type TValue = {
  myfield: Date;
};

const CaseTemplate: Story<TForm<TValue>> = (args: TForm<TValue>) => {
  const [value, setValue] = useState(args.value);
  const [isValid, setIsValid] = useState(false);
  const onChange: TForm<TValue>['onChange'] = (value, isValid) => {
    setValue(value);
    setIsValid(isValid);
  };
  const fields = clone<typeof args.fields>(args.fields);
  return (
    <>
      <Form<TValue> {...args} {...{ onChange, value }} fields={fields} />
      <pre>{JSON.stringify({ isValid, value }, null, 2)}</pre>
    </>
  );
};

export const NonEmptyAndNonRequired = CaseTemplate.bind({});
NonEmptyAndNonRequired.args = {
  fields: [
    {
      name: 'myfield',
      type: 'date',
      validator: (value: Date) => {
        if (value.toISOString() < '2021-05-10') return ['Too early'];
        return [];
      },
    },
  ],
  value: { myfield: new Date('2019-01-05') },
};
