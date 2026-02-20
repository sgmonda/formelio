import { render, screen } from '@testing-library/react';

import * as stories from './SingleFieldText.stories';
import { TForm } from '../types';
import { StoryFn } from '@storybook/react';

const TestCases: StoryFn<TForm<stories.TValue>>[] = Object.entries(stories)
  .filter(([key]) => !/(template|default)/i.test(key))
  .map(([, Component]) => Component) as any;

TestCases.forEach((TestCase, i) =>
  it(`Test Case #${i}`, async () => {
    const { fields = [], onChange = () => {}, value } = { ...TestCase.args };
    const props = { ...TestCase.args, fields, onChange, value };
    render(<TestCase {...props} />);
    for (const { name, label, required } of fields) {
      let labelText = label || name || '';
      if (required) labelText += ' *';
      const elem = (await screen.findByLabelText(labelText)) as HTMLInputElement;
      expect(elem.value).toBe(props.value?.[name || ''] || '');
    }
  })
);
