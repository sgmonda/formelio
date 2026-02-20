![logo](https://user-images.githubusercontent.com/675812/123748412-75fa8f80-d8b4-11eb-98e5-30b491fe822b.png)

Forms for human beings

[![NPM](https://img.shields.io/npm/v/formelio.svg)](https://www.npmjs.com/package/formelio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Installation

```bash
npm install formelio react react-dom styled-components
```

`react`, `react-dom` and `styled-components` are peer dependencies and must be installed in your project.

# Usage

```tsx
import React, { useState } from 'react';
import { Form } from 'formelio';
import 'formelio/styles.css';

export const MyForm = () => {
  const [value, onChange] = useState({});
  const fields = [{ name: 'email' }, { name: 'password', type: 'password' }];
  return <Form {...{ fields, value, onChange }} />;
};
```

> **Important:** You must import the CSS file (`formelio/styles.css`) for the form to render correctly. Alternatively, you can use `formelio/dist/index.css`.

Go to [https://sgmonda.com/formelio/](https://sgmonda.com/formelio/) to see more usage examples.

## TypeScript

Formelio exports generic types to provide full type safety:

```tsx
import { Form, TForm, TField } from 'formelio';

type MyValues = { email: string; age: number };

const fields: TForm<MyValues>['fields'] = [
  { name: 'email', type: 'text', required: true },
  { name: 'age', type: 'number' },
];

const MyForm = () => {
  const [value, setValue] = useState<Partial<MyValues>>({});
  return <Form<MyValues> fields={fields} value={value} onChange={(v) => setValue(v)} />;
};
```

## Form properties

| Property   | Required | Description                                                       | Default                                   |
| ---------- | -------- | ----------------------------------------------------------------- | ----------------------------------------- |
| `fields`   | yes      | Form inputs to include in the form                                | -                                         |
| `onChange` | yes      | Change event handler, receiving form value and validity status    | -                                         |
| `value`    | yes      | Current value for all (or some) inputs                            | `{}`                                      |
| `delay`    | no       | Time to wait before triggering `onChange()` after an input change | 500ms                                     |
| `colors`   | no       | Simple customization                                              | `{ accent: '#5196D5', error: '#D65947' }` |

### Fields

| Property    | Required | Description                                                                                                   | Default  |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| `name`      | yes      | Field name                                                                                                    | -        |
| `label`     | no       | Field label for humans. If not provided, `name` is used                                                       | -        |
| `required`  | no       | If the a value is mandatory                                                                                   | false    |
| `type`      | no       | Input type: `"text"`, `"text-multiline"`, `"number"`, `"date"`, `"select"`, `"tags"`, `"check"`, `"password"` | `"text"` |
| `size`      | no       | Percentage of row width to be used as field width, in range [0, 1]                                            | 1        |
| `icon`      | no       | Icon to display — accepts any `ReactNode` (see [Icons](#icons))                                               | -        |
| `validator` | no       | Function that validates provided value                                                                        | -        |
| `when`      | no       | List of conditions to show/hide the field                                                                     | -        |
| `help`      | no       | Help text shown on focus (supports basic markdown)                                                            | -        |

For complex fields (those with fields inside):

| Property | Required | Description                                         | Default   |
| -------- | -------- | --------------------------------------------------- | --------- |
| `length` | no       | Function to compute the amount of items in the list | `() => 0` |
| `fields` | no       | Subfields list                                      | `[]`      |

### Icons

The `icon` field accepts any React node, so you can use any icon library:

```tsx
// With an emoji
{ name: 'email', icon: '📧' }

// With a custom SVG
{ name: 'email', icon: <MyEmailIcon /> }

// With any icon library (e.g. lucide-react, react-icons, etc.)
import { Mail } from 'lucide-react';
{ name: 'email', icon: <Mail size={16} /> }
```

### Conditional fields (`when`)

Fields can be shown/hidden based on form values:

```tsx
const fields = [
  { name: 'hasAddress', type: 'check', label: 'Add address?' },
  { name: 'address', when: [(v) => !!v.hasAddress] },
];
```

### Nested and dynamic fields

```tsx
const fields = [
  {
    label: 'Addresses',
    length: (v) => v.addressCount || 0,
    fields: [{ name: 'street' }, { name: 'city' }],
  },
];
```

### Custom validators

```tsx
const fields = [
  {
    name: 'age',
    type: 'number',
    validator: (value) => {
      if (value < 18) return ['Must be at least 18'];
      return [];
    },
  },
];
```

### Theme / Colors

Customize colors via the `colors` prop (`TColors`):

```tsx
<Form
  colors={{ accent: '#5196D5', error: '#D65947', base: '#333' }}
  fields={fields}
  value={value}
  onChange={onChange}
/>
```

## Compatibility

| Dependency        | Supported versions   |
| ----------------- | -------------------- |
| React             | ^18.0.0 \|\| ^19.0.0 |
| react-dom         | ^18.0.0 \|\| ^19.0.0 |
| styled-components | ^5.2.1 \|\| ^6.0.0   |
| Node.js           | >= 18                |

# Contributing

### Git hooks

This project uses git hooks for:

- Commit message format: see https://www.conventionalcommits.org/
- Linting, formatting and testing before committing

### Storybook

To play with individual components and see usage cases:

```
npm run storybook
```

### Development

Clone this repository and run:

```
npm i
```

Then open 3 terminals:

- Terminal 1: Dev server (watch + compile):

  ```
  npm run dev
  ```

- Terminal 2: Test watcher:

  ```
  npm run dev:test
  ```

- Terminal 3: Serve the example site:

  ```
  npm run dev:site
  ```

### Deployment

To publish on npm:

```
npm publish
```

To update gh pages:

```
npm run site:deploy
```

# License

Feel free to use this project as you need, always under the terms of [MIT license](./license.md).
