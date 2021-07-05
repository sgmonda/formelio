![logo](https://user-images.githubusercontent.com/675812/123748412-75fa8f80-d8b4-11eb-98e5-30b491fe822b.png)

Forms for human beings

[![NPM](https://img.shields.io/npm/v/formelio.svg)](https://www.npmjs.com/package/formelio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Installation

To use `Formelio` from a [React](https://reactjs.org) component, just install it with your favorite package manager (like [NPM](https://www.npmjs.com)):

```bash
npm install --save formelio
```

# Usage

Once installed, you'll be able to import and use it from your Javascript/Typescript code. Here's a simple example of a simple login form, without validation or password hiding (please, don't do this in production 😜):

```javascript
import React, { useState } from 'react';
import { Form } from 'formelio';
import 'formelio/dist/index.css';

export const MyForm = () => {
  const [value, onChange] = useState({});
  const fields = [{ name: 'email' }, { name: 'password' }];
  return <Form {...{ fields, value, onChange }} />;
};
```

Go to [https://sgmonda.com/formelio/](https://sgmonda.com/formelio/) to see this and other usage examples working.

## Form properties

A form requires the following main properties:

| Property   | Required | Description                                                       | Default                                   |
| ---------- | -------- | ----------------------------------------------------------------- | ----------------------------------------- |
| `fields`   | yes      | Form inputs to include in the form                                | -                                         |
| `onChange` | yes      | Change event handler, receiving form value and validity status    | -                                         |
| `value`    | yes      | Current value for all (or some) inputs                            | `{}`                                      |
| `delay`    | no       | Time to wait before triggering `onChange()` after an input change | 500ms                                     |
| `colors`   | no       | Simple customization                                              | `{ accent: '#5196D5', error: '#D65947' }` |

### Fields

It is a list (`Array`) of field definitions. A field definition is a plain object where field properties are defined. Example:

```
<Form
  ...
  fields={[
    { name: 'firstName', type: 'text', required: true },
    { name: 'age', type: 'number' },
  ]}
  ...
/>
```

| Property    | Required | Description                                                                                                   | Default  |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| `name`      | yes      | Field name                                                                                                    | -        |
| `label`     | no       | Field label for humans. If not provided, `name` is used                                                       | -        |
| `required`  | no       | If the a value is mandatory                                                                                   | false    |
| `type`      | no       | Input type: `"text"`, `"text-multiline"`, `"number"`, `"date"`, `"select"`, `"tags"`, `"check"`, `"password"` | `"text"` |
| `size`      | no       | Percentage of row width to be used as field width, in range [0, 1]                                            | 1        |
| `icon`      | no       | Icon to be shown (from [fontawesome](https://fontawesome.com/icons))                                          | -        |
| `validator` | no       | Function that validates provided value                                                                        | -        |
| `when`      | no       | List of conditions to show/hide the field                                                                     | -        |

For complex fields (those with fields inside), there are additional properties:

| Property | Required | Description                                         | Default   |
| -------- | -------- | --------------------------------------------------- | --------- |
| `length` | no       | Function to compute the amount of items in the list | `() => 0` |
| `fields` | no       | Subfields list                                      | `[]`      |

Take a look at [examples page](https://sgmonda.github.io/formelio/) to see all this in action.

### onChange()

It is a change event handler, that will be called when the form is modified. It also receives a validation state, according with `required` properties and custom validators (see next section). Example:

```
<Form
  ...
  onChange={ (value, isValid) => { /* Do whatever you want */ } }
  ...
/>
```

# Contributing

### Git hooks

This project uses git hooks for:

- Commit message format: see https://www.conventionalcommits.org/
- Linting, formating and testing before commiting

### Storybook

To play with individual components and see usage cases, you can run [Storybook](https://storybook.js.org) as follows:

```
$ npm run storybook
```

### Development

Clone this repository and run the following:

```
$ npm i
```

Then open 3 terminals:

- Terminal 1: Open dev server, to compile and bundle everything on every change:

  ```
  $ npm run dev
  ```

- Terminal 2: Open test watcher, to run tests on every change:

  ```
  $ npm run dev:test
  ```

- Terminal 3: Serve (watching) the example

  ```
  $ npm run dev:site
  ```

#### Note about react link

To prevent `Invalid hook call` error during development of another app using formelio as file dependency, I mean:

```
// path/to/myOtherProject/package.json

"dependencies": {
  "formelio": "path/to/formelio",
}
```

We should link react version from formelio project. Example:

```
$ npm link path/to/myOtherProject/node_modules/react-dom
$ cd path/to/myOtherProject/ && npm i
```

### Deployment

To publish on npm:

```
$ npm publish
```

To update gh pages:

```
$ npm run site:deploy
```

# License

Feel free to use this project as you need, always under the terms of [MIT license](./license.md).
