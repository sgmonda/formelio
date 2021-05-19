import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Form, { TForm } from '..';
import { clone } from '../modules';

export default {
  component: Form,
  title: 'Validation',
} as Meta;

export type TValue = {
  password: string;
  password2: string;
  user: {
    password: string;
    password2: string;
  };
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

export const PasswordsEquality = CaseTemplate.bind({});
PasswordsEquality.args = {
  fields: [
    {
      name: 'password',
      required: true,
      size: 0.5,
      type: 'password',
    },
    {
      name: 'password2',
      required: true,
      size: 0.5,
      type: 'password',
      validator: (value: string, formValue: Partial<TValue>) => {
        return value === formValue.password ? [] : ['Passwords do not match'];
      },
    },
  ],
  value: {},
};

export const PasswordsEqualityDeep = CaseTemplate.bind({});
PasswordsEqualityDeep.args = {
  fields: [
    {
      fields: [
        {
          name: 'password',
          required: true,
          size: 0.5,
          type: 'password',
        },
        {
          label: 'Password repeat',
          name: 'password2',
          required: true,
          size: 0.5,
          type: 'password',
          validator: (value: string, formValue: Partial<TValue>) => {
            return value === formValue.user?.password ? [] : ['Passwords do not match'];
          },
        },
      ],
      name: 'user',
    },
  ],
  value: {},
};
