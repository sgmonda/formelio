import React, { useState } from 'react';

import Formelio, { Props } from 'formelio';
import 'formelio/dist/index.css';

type TFormValue = {
  firstname: string;
  firstName2: string;
  surname1: string;
  surname2: string;
};

const App = () => {
  const [value, setValue] = useState<Partial<TFormValue>>({ firstName2: 'error', surname1: 'García' });

  const onChange: Props<TFormValue>['onChange'] = async (v) => {
    setValue(v);
  };

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
            {
              help: 'Esto es algo de ayuda. Bla bla bla',
              label: 'Nombre',
              name: 'firstName2',
              validator: async (v: string) => (v === 'error' ? ['error 1', 'error 2'] : []),
            },
            { label: 'Primer apellido', name: 'surname1' },
            { name: 'surname2' },
          ],
        ]}
        value={value}
        onChange={onChange}
      />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};

export default App;
