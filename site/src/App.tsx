import React from 'react';
import Examples from './Examples';
import 'formelio/dist/index.css';

const App = () => {
  return (
    <div className="content">
      <h2>Examples</h2>
      <p>The best way to learn is by example, so here are some cool use cases to see how to use Formelio.</p>
      <Examples />
    </div>
  );
};

export default App;
