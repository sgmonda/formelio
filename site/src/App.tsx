import React from 'react';
import Examples from './Examples';
// eslint-disable-next-line import/no-webpack-loader-syntax
// import { default as Features } from '!!raw-loader!./Features.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
// import { default as Definitions } from '!!raw-loader!./Definitions.md';
import 'formelio/dist/index.css';
// import Markdown from './Markdown';

const App = () => {
  return (
    <div className="container">
      {/* <section className="content">
        <Markdown text={Features} />
      </section>
      <section className="content">
        <Markdown text={Definitions} />
      </section> */}
      <section className="content">
        <h2>Formelio by example</h2>
        <p>
          The best way to learn is by example, so here are some cool use cases to see how to use{' '}
          <a href="https://github.com/sgmonda/formelio/">Formelio</a>.
        </p>
        <Examples />
      </section>
    </div>
  );
};

export default App;
