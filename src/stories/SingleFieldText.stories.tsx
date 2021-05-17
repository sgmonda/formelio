import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Form, { TForm } from '..';

export default {
  component: Form,
  title: 'Single Field > Text',
} as Meta;

export type TValue = {
  myfield: string;
};

const CaseTemplate: Story<TForm<TValue>> = (args: TForm<TValue>) => {
  const [value, setValue] = useState(args.value);
  const [isValid, setIsValid] = useState(false);
  const onChange: TForm<TValue>['onChange'] = (value, isValid) => {
    setValue(value);
    setIsValid(isValid);
  };
  return (
    <>
      <Form<TValue> {...args} {...{ onChange, value }} />
      <pre>{JSON.stringify({ isValid, value }, null, 2)}</pre>
    </>
  );
};

export const NonEmptyAndNonRequired = CaseTemplate.bind({});
NonEmptyAndNonRequired.args = {
  fields: [
    {
      name: 'myfield',
    },
  ],
  value: { myfield: 'Hello, world' },
};

export const EmptyAndNonRequired = CaseTemplate.bind({});
EmptyAndNonRequired.args = { fields: [{ name: 'myfield' }] };

export const EmptyAndNonRequiredWithHelp = CaseTemplate.bind({});
EmptyAndNonRequiredWithHelp.args = {
  fields: [
    {
      help: 'This is a help message, **this *supports* markdown**',
      name: 'myfield',
    },
  ],
};

export const EmptyAndNonRequiredWithIcon = CaseTemplate.bind({});
EmptyAndNonRequiredWithIcon.args = {
  fields: [
    {
      icon: 'user',
      name: 'myfield',
    },
  ],
};

export const EmptyAndNonRequiredWithIconAndHelp = CaseTemplate.bind({});
EmptyAndNonRequiredWithIconAndHelp.args = {
  fields: [
    {
      help: 'This is a help message, **this *supports* markdown**',
      icon: 'user',
      name: 'myfield',
    },
  ],
};

export const EmptyAndRequired = CaseTemplate.bind({});
EmptyAndRequired.args = { fields: [{ name: 'myfield', required: true }] };

export const EmptyAndRequiredWithHelp = CaseTemplate.bind({});
EmptyAndRequiredWithHelp.args = {
  fields: [
    {
      help: 'This is a help message, **this *supports* markdown**',
      name: 'myfield',
      required: true,
    },
  ],
};
