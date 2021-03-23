# formelio

> Forms for human beings

[![NPM](https://img.shields.io/npm/v/formelio.svg)](https://www.npmjs.com/package/formelio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save formelio
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'formelio'
import 'formelio/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

GPL-3.0 © [Sergio Garcia Mondaray &lt;sgmonda@gmail.com&gt; (https://sgmonda.com)](https://github.com/Sergio Garcia Mondaray &lt;sgmonda@gmail.com&gt; (https://sgmonda.com))

## Development

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
  $ npm run dev:example
  ```
