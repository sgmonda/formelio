import React from 'react';

import Formelio from 'formelio';
import 'formelio/dist/index.css';

const App = () => {
  return <Formelio fields={[[{ label: 'Nombre', name: 'firstName' }]]} />;
};

export default App;
