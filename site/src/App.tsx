import React from 'react';

import Formelio from 'formelio';
import 'formelio/dist/index.css';

type TFormValue = {
  firstname: string;
  surname1: string;
  surname2: string;
};

const App = () => {
  return (
    <div style={{ border: 'solid 1px gray', margin: '1em', padding: '1em' }}>
      <Formelio<TFormValue>
        fields={[
          [
            { label: 'Nombre', name: 'firstName' },
            { help: 'Esto es algo de ayuda. Bla bla bla', label: 'Primer apellido', name: 'surname1' },
            { name: 'surname2' },
          ],
          [
            { label: 'Nombre', name: 'firstName', validator: async () => ['error 1', 'error 2'] },
            { label: 'Primer apellido', name: 'surname1' },
            { name: 'surname2' },
          ],
        ]}
        value={{ surname1: 'García' }}
      />
      <div className="columns">
        <div className="column">a</div>
        <div className="column">b</div>
        <div className="column">c</div>
      </div>
    </div>
  );
};

export default App;
