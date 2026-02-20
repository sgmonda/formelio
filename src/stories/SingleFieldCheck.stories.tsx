import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Form, { TForm } from '..';
import { clone } from '../modules';

export default {
  component: Form,
  title: 'Single Field > Check',
} as Meta;

export type TValue = {
  myfield: boolean;
};

const CaseTemplate: StoryFn<TForm<TValue>> = (args: TForm<TValue>) => {
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

export const UncheckedAndNonRequired = CaseTemplate.bind({});
UncheckedAndNonRequired.args = {
  fields: [{ name: 'myfield', type: 'check' }],
};

export const CheckedAndNonRequired = CaseTemplate.bind({});
CheckedAndNonRequired.args = {
  fields: [{ name: 'myfield', type: 'check' }],
  value: { myfield: true },
};

export const UncheckedAndRequired = CaseTemplate.bind({});
UncheckedAndRequired.args = {
  fields: [{ name: 'myfield', required: true, type: 'check' }],
};

export const WithCustomLabel = CaseTemplate.bind({});
WithCustomLabel.args = {
  fields: [
    {
      label: 'I accept the [terms and conditions](https://example.com)',
      name: 'myfield',
      required: true,
      type: 'check',
    },
  ],
};

export const WithHelp = CaseTemplate.bind({});
WithHelp.args = {
  fields: [
    {
      help: 'You must accept to continue',
      name: 'myfield',
      required: true,
      type: 'check',
    },
  ],
};
