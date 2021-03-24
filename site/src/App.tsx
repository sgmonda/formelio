import React, { useState } from 'react';

import Formelio, { FieldProps, Props } from 'formelio';
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

  const fields: FieldProps<any>[] = [
    { label: 'Nombre', name: 'firstName', size: 0.5 },
    { help: 'Esto es algo de ayuda. Bla bla bla', label: 'Primer apellido', name: 'surname1', size: 0.25 },
    { name: 'surname2', size: 0.25 },
    {
      name: 'city',
      options: {
        val1: { label: 'First value' },
        val2: { label: 'Seconds value' },
        val3: { label: 'Third value' },
      },
    },
    {
      help: 'Esto es algo de ayuda. Bla bla bla',
      label: 'Nombre',
      name: 'firstName2',
      validator: async (v: string) => (v === 'error' ? ['error 1', 'error 2'] : []),
    },
    { label: 'Primer apellido', name: 'surname1b', size: 0.5 },
    { name: 'surname2b', size: 0.5 },
  ];

  return (
    <div className="panel" style={{ margin: '5em' }}>
      <div className="panel-block">
        <Formelio<TFormValue> fields={fields} value={value} onChange={onChange} />
      </div>
      <div className="panel-block">
        <pre style={{ height: '100%', width: '100%' }}>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
