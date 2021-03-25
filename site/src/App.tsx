import React, { useState } from 'react';
import Formelio, { FieldProps, Props } from 'formelio';
import cities from './data/geo/municipios.json';
import provinces from './data/geo/provincias.json';
import regions from './data/geo/regiones.json';
import 'formelio/dist/index.css';

type TFormValue = {
  firstname: string;
  firstName2: string;
  surname1: string;
  surname2: string;
  province: string;
  region: string;
  city: string;
};

console.log(cities.length, 'items');

const App = () => {
  const [value, setValue] = useState<Partial<TFormValue>>({
    firstName2: 'error',
    surname1: 'García',
    region: 'Cataluña',
  });
  const [availableCities, setAvailableCities] = useState(cities);
  const [availableProvinces, setAvailableProvinces] = useState(provinces);

  const onChange: Props<TFormValue>['onChange'] = async (v) => {
    setAvailableProvinces(provinces.filter(({ region }) => region === v.region));
    setAvailableCities(
      cities.filter(({ provincia, region }) => {
        return v.province === provincia && v.region === region;
      })
    );
    if (value.region !== v.region) {
      v.province = undefined;
      v.city = undefined;
    }
    if (value.province !== v.province) {
      v.city = undefined;
    }
    setValue(v);
  };

  const fields: FieldProps<any>[] = [
    { label: 'Nombre', name: 'firstName', size: 0.5 },
    { help: 'Esto es algo de ayuda. Bla bla bla', label: 'Primer apellido', name: 'surname1', size: 0.25 },
    { name: 'surname2', size: 0.25 },
    {
      name: 'region',
      size: 0.333,
      options: regions.map((name) => ({ label: name, value: name })),
    },
    {
      name: 'province',
      isDisabled: !value.region,
      size: 0.333,
      options: availableProvinces.map((item) => ({ label: item.name, value: item.name, metadata: item })),
      validator: async (v: string, form: any) =>
        v === 'val2' && form.region === 'val1' ? ['no vale la opción 2 si region es "First value"'] : [],
    },
    {
      name: 'city',
      // isDisabled: !value.province,
      size: 0.333,
      options: availableCities.map((item) => ({ label: item.name, value: item.name, metadata: item })),
      validator: async (v: string, form: any) =>
        v === 'val2' && form.region === 'val1' ? ['no vale la opción 2 si region es "First value"'] : [],
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
