import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Form, { TForm } from '..';

export default {
  component: Form,
  title: 'Single Field > Text',
} as Meta;

type TValue = {
  myfield: string;
};

const CaseTemplate: Story<TForm<TValue>> = (args: any) => {
  const [value, setValue] = useState({});
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

export const EmptyAndNonRequired = CaseTemplate.bind({});
EmptyAndNonRequired.args = { fields: [{ name: 'myfield' }] };

export const EmptyAndNonRequiredWithHelp = CaseTemplate.bind({});
EmptyAndNonRequiredWithHelp.args = {
  fields: [{ name: 'myfield', help: 'This is a help message, **this *supports* markdown**' }],
};

export const EmptyAndNonRequiredWithIcon = CaseTemplate.bind({});
EmptyAndNonRequiredWithIcon.args = { fields: [{ name: 'myfield', icon: 'user' }] };

export const EmptyAndNonRequiredWithIconAndHelp = CaseTemplate.bind({});
EmptyAndNonRequiredWithIconAndHelp.args = {
  fields: [{ name: 'myfield', icon: 'user', help: 'This is a help message, **this *supports* markdown**' }],
};

export const EmptyAndRequired = CaseTemplate.bind({});
EmptyAndRequired.args = { fields: [{ name: 'myfield', required: true }] };

export const EmptyAndRequiredWithHelp = CaseTemplate.bind({});
EmptyAndRequiredWithHelp.args = {
  fields: [{ name: 'myfield', required: true, help: 'This is a help message, **this *supports* markdown**' }],
};
