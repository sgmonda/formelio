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

To update gh pages:

```
$ npm run deploy:page
```

To publish on npm:

```
$ npm publish
```
