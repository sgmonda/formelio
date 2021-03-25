import React, { useState } from 'react';
import Formelio, { FieldProps, Props } from 'formelio';
import cities from './data/geo/municipios.json';
import provinces from './data/geo/provincias.json';
import regions from './data/geo/regiones.json';
import 'formelio/dist/index.css';
import { validateDNI } from './modules';

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
    { label: 'Nombre', name: 'name', size: 0.5 },
    {
      label: 'Primer apellido',
      name: 'surname1',
      size: 0.25,
      autocomplete: 'additional-name',
    },
    {
      label: 'Segundo apellido',
      name: 'surname1',
      size: 0.25,
      autocomplete: 'family-name',
    },
    {
      help: 'Introduce sólo números y letras',
      label: 'DNI',
      size: 0.5,
      name: 'dni',
      validator: validateDNI,
    },
    {
      name: 'region',
      size: 0.333,
      options: regions.map((name) => ({ label: name, value: name })),
    },
    {
      name: 'province',
      disabled: !value.region,
      size: 0.333,
      options: availableProvinces.map((item) => ({ label: item.name, value: item.name, metadata: item })),
      validator: async (v: string, form: any) =>
        v === 'val2' && form.region === 'val1' ? ['no vale la opción 2 si region es "First value"'] : [],
    },
    {
      name: 'city',
      disabled: !value.province,
      size: 0.333,
      options: availableCities.map((item) => ({ label: item.name, value: item.name, metadata: item })),
      validator: async (v: string, form: any) =>
        v === 'val2' && form.region === 'val1' ? ['no vale la opción 2 si region es "First value"'] : [],
    },
    { label: 'Número', name: 'number', size: 0.5, type: 'number' },
    {
      label: 'Fecha',
      name: 'd',
      size: 0.5,
      type: 'date',
      format: 'dd / MMM / yyyy',
    },
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
