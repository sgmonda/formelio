import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Field, { Props } from './Field';

export default {
  component: Field,
  title: 'Field',
} as Meta;

const TextTemplate: Story<Props<string, { name: 'myfield' }>> = (args: any) => {
  const [value, onChange] = useState('');
  return <Field<string, { name: 'myfield' }> {...args} {...{ onChange, value }} />;
};

export const FirstFieldStory = TextTemplate.bind({});
FirstFieldStory.args = { label: 'TEXT FIELD' };

export const SecondFieldStory = TextTemplate.bind({});
SecondFieldStory.args = { label: 'SecondFieldStory 😃' };
