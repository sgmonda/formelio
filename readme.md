![logo](https://user-images.githubusercontent.com/675812/123748412-75fa8f80-d8b4-11eb-98e5-30b491fe822b.png)

Forms for human beings

[![NPM](https://img.shields.io/npm/v/formelio.svg)](https://www.npmjs.com/package/formelio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

See https://sgmonda.github.io/formelio/ for documentation and usage examples.

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

Go to https://sgmonda.github.io/formelio/ to see this and other usage examples working.

## Form properties

A form requires the following main properties:

| Property   | Required | Description                                                       | Default                                   |
| ---------- | -------- | ----------------------------------------------------------------- | ----------------------------------------- |
| `fields`   | `[X]`    | Form inputs to include in the form                                | -                                         |
| `onChange` | `[X]`    | Change event handler, receiving form value and validity status    | -                                         |
| `value`    | `[ ]`    | Initial or current value for all (or some) inputs                 | `{}`                                      |
| `delay`    | `[ ]`    | Time to wait before triggering `onChange()` after an input change | 500ms                                     |
| `colors`   | `[ ]`    | Simple customization                                              | `{ accent: '#5196D5', error: '#D65947' }` |

- `fields`: A list (`Array`) of field definitions. A field definition is a plain object where field properties are defined. See the next section. Example:

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

- `onChange`: A change event handler, that will be called when the form is modified. It also receives a validation state, according with `required` properties and custom validators (see next section). Example:

  ```
  <Form
    ...
    onChange={ (value, isValid) => { /* Do whatever you want */ } }
    ...
  />
  ```

A form supports also the following optional properties:

- `colors`
- `delay`
- `value`

Now lets see how to define each property correctly:

# License

GPL-3.0 © [Sergio Garcia Mondaray](https://sgmonda.com)

# Development

#### Git hooks

This project uses git hooks for:

- Commit message format: see https://www.conventionalcommits.org/
- Linting, formating and testing before commiting

#### Storybook

```
$ npm run storybook
```

#### Environment

##### First time

```
$ npm i
```

##### React link

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

##### Once working

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

#### Deployment

To publish on npm:

```
$ npm publish
```

To update gh pages:

```
$ npm run site:deploy
```
