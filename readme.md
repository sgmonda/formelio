![logo](https://user-images.githubusercontent.com/675812/123748412-75fa8f80-d8b4-11eb-98e5-30b491fe822b.png)

# Formelio

**Declarative React forms, built for humans.**

Define your fields, pass your state — Formelio handles rendering, validation, conditional visibility, nested structures, and theming.

[![NPM](https://img.shields.io/npm/v/formelio.svg)](https://www.npmjs.com/package/formelio)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./license.md)

[Live demo & examples](https://sgmonda.com/formelio/)

---

## Getting started

### 1. Install

```bash
npm install formelio
```

Formelio requires **React 18+** and **styled-components 5.2+** as peer dependencies. If your project doesn't include them yet:

```bash
npm install react react-dom styled-components
```

### 2. Import styles

Formelio ships its own CSS that must be imported once in your application:

```ts
import 'formelio/styles.css';
```

### 3. Render a form

```tsx
import { useState } from 'react';
import { Form } from 'formelio';
import 'formelio/styles.css';

const LoginForm = () => {
  const [value, onChange] = useState({});
  return (
    <Form
      fields={[
        { name: 'email', required: true },
        { name: 'password', type: 'password', required: true },
      ]}
      value={value}
      onChange={(v, isValid) => {
        onChange(v);
        if (isValid) console.log('Ready to submit', v);
      }}
    />
  );
};
```

That's it. No boilerplate, no manual wiring.

---

## Peer dependencies

Formelio is designed to integrate into any React project without imposing extra runtime dependencies beyond what most apps already use.

| Dependency          | Required version       | Why                       |
| ------------------- | ---------------------- | ------------------------- |
| `react`             | `^18.0.0` or `^19.0.0` | Core rendering            |
| `react-dom`         | `^18.0.0` or `^19.0.0` | DOM rendering             |
| `styled-components` | `^5.2.1` or `^6.0.0`   | Dynamic styling & theming |

> Formelio supports both ESM and CommonJS. The package exposes `main` (CJS), `module` (ESM), and full `exports` map with TypeScript declarations.

---

## TypeScript support

Formelio is written in TypeScript and exports generic types for full type safety:

```tsx
import { Form, TForm } from 'formelio';

type UserData = { email: string; age: number };

const fields: TForm<UserData>['fields'] = [
  { name: 'email', type: 'text', required: true },
  { name: 'age', type: 'number' },
];

const UserForm = () => {
  const [value, setValue] = useState<Partial<UserData>>({});
  return <Form<UserData> fields={fields} value={value} onChange={(v) => setValue(v)} />;
};
```

### Exported types

| Type              | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `TForm<T>`        | Props for the `Form` component                          |
| `TField<T, F>`    | Single field definition (value type `T`, form type `F`) |
| `TColors`         | Theme customization: `{ base?, accent?, error? }`       |
| `TInput<T>`       | Low-level input props                                   |
| `TFieldValidator` | Validator function signature                            |

---

## API reference

### `<Form>` props

| Prop       | Type                                            | Required | Default                                   | Description                                  |
| ---------- | ----------------------------------------------- | -------- | ----------------------------------------- | -------------------------------------------- |
| `fields`   | `TField[]`                                      | yes      | —                                         | Array of field definitions                   |
| `value`    | `Partial<T>`                                    | yes      | `{}`                                      | Current form values                          |
| `onChange` | `(value: Partial<T>, isValid: boolean) => void` | yes      | —                                         | Called on every change with value & validity |
| `delay`    | `number`                                        | no       | `500`                                     | Debounce delay (ms) before firing `onChange` |
| `colors`   | `TColors`                                       | no       | `{ accent: '#5196D5', error: '#D65947' }` | Theme colors                                 |

### Field definition

| Property    | Type                             | Default  | Description                                                                |
| ----------- | -------------------------------- | -------- | -------------------------------------------------------------------------- |
| `name`      | `string`                         | —        | Field identifier (required)                                                |
| `type`      | see below                        | `"text"` | Input type                                                                 |
| `label`     | `string`                         | `name`   | Human-readable label                                                       |
| `required`  | `boolean`                        | `false`  | Whether the field is mandatory                                             |
| `size`      | `number`                         | `1`      | Width as fraction of row (0–1), e.g. `0.5` for half width                  |
| `icon`      | `ReactNode`                      | —        | Icon displayed inside the field (emoji, SVG, or any component)             |
| `validator` | `(value, formValue) => string[]` | —        | Custom validation — return an array of error messages (or empty for valid) |
| `when`      | `((formValue) => boolean)[]`     | —        | Conditions to show/hide the field dynamically                              |
| `help`      | `string`                         | —        | Help text shown on focus (supports basic markdown)                         |
| `options`   | `{ value, label? }[]`            | —        | Options for `select` and `tags` types                                      |

#### Input types

`"text"` · `"password"` · `"number"` · `"date"` · `"select"` · `"tags"` · `"check"` · `"text-multiline"` · `"files"`

#### Nested / dynamic fields

Fields can contain sub-fields and repeat dynamically:

| Property | Type                    | Description                            |
| -------- | ----------------------- | -------------------------------------- |
| `fields` | `TField[]`              | List of sub-fields                     |
| `length` | `(formValue) => number` | Function returning the number of items |

---

## Features

### Conditional fields

Show or hide fields based on the current form value:

```tsx
const fields = [
  { name: 'hasAddress', type: 'check', label: 'Add address?' },
  { name: 'address', when: [(v) => !!v.hasAddress] },
];
```

### Nested and dynamic fields

Build repeatable groups of fields:

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

Return an array of error strings (empty = valid). Validators can be async:

```tsx
const fields = [
  {
    name: 'age',
    type: 'number',
    validator: (value) => (value < 18 ? ['Must be at least 18'] : []),
  },
];
```

### Icons

The `icon` property accepts any React node:

```tsx
{ name: 'email', icon: '📧' }
{ name: 'email', icon: <MyEmailIcon /> }

// With any icon library (lucide-react, react-icons, etc.)
import { Mail } from 'lucide-react';
{ name: 'email', icon: <Mail size={16} /> }
```

### Theming

Customize colors via the `colors` prop:

```tsx
<Form
  colors={{ accent: '#5196D5', error: '#D65947', base: '#333' }}
  fields={fields}
  value={value}
  onChange={onChange}
/>
```

---

## Compatibility

| Requirement       | Version            |
| ----------------- | ------------------ |
| Node.js           | >= 18              |
| React             | ^18.0.0 or ^19.0.0 |
| styled-components | ^5.2.1 or ^6.0.0   |

---

## Contributing

### Setup

```bash
git clone https://github.com/sgmonda/formelio.git
cd formelio
npm install
```

### Development workflow

Run these in separate terminals:

```bash
npm run dev          # Watch mode — rebuilds on file changes
npm run dev:test     # Test watcher (vitest)
npm run storybook    # Component playground on port 6006
```

### Git hooks

- **pre-commit** — runs lint, formatting, build, and full test suite
- **commit-msg** — enforces [Conventional Commits](https://www.conventionalcommits.org/)

### Publishing

```bash
npm publish          # Publish to npm
npm run site:deploy  # Update the demo site (GitHub Pages)
```

---

## License

[MIT](./license.md) — Sergio Garcia Mondaray
