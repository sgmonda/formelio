import React from 'react';
import Examples from './Examples';
// eslint-disable-next-line import/no-webpack-loader-syntax
import { default as Features } from '!!raw-loader!./Features.md';
import 'formelio/dist/index.css';
import Markdown from './Markdown';

console.log('FEATURES', Features);

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Markdown text={Features} />
      </div>
      <div className="content">
        <h2>Examples 2</h2>
        <p>The best way to learn is by example, so here are some cool use cases to see how to use Formelio.</p>
        <Examples />
      </div>
    </div>
  );
};

export default App;
