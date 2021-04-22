Forms for human beings

[![NPM](https://img.shields.io/npm/v/formelio.svg)](https://www.npmjs.com/package/formelio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

See https://sgmonda.github.io/formelio/ for documentation and usage examples.

# Installation

```bash
npm install --save formelio
```

# Usage

```tsx
import React, { Component } from 'react';

import MyComponent from 'formelio';
import 'formelio/dist/index.css';

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

# License

GPL-3.0 © [Sergio Garcia Mondaray](https://sgmonda.com)

# Development

#### Git hooks

This project uses git hooks for:

- Commit message format: see https://www.conventionalcommits.org/
- Lint, format and test before commiting

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
