import React, { useState } from 'react';
import Form, { TForm } from 'formelio';
import cities from './data/geo/municipios.json';
import provinces from './data/geo/provincias.json';
import regions from './data/geo/regiones.json';
import 'formelio/dist/index.css';
import { validateDNI } from './modules';

type TFormValue = {
  dni: string;
  name: string;
  surname1: string;
  surname2: string;
  province: string;
  comentario: string;
  region: string;
  city: string;
  number: number;
  d: Date;
  f: File[];
  tos: boolean;
  tos2: boolean;
};

const filterGeo = (v: any) => {
  const prov = provinces.filter(({ region }) => region === v.region);
  const cit = cities.filter(({ provincia, region }) => {
    return v.province === provincia && v.region === region;
  });
  return { prov, cit };
};

const App = () => {
  const initialFormValue = {
    name: 'error',
    surname1: 'García sdf wef wew ew rwer wer w',
    region: 'Cataluña',
  };
  const [value, setValue] = useState<Partial<TFormValue>>(initialFormValue);
  const { prov, cit } = filterGeo(initialFormValue);
  const [availableCities, setAvailableCities] = useState(cit);
  const [availableProvinces, setAvailableProvinces] = useState(prov);

  const onChange: TForm<TFormValue>['onChange'] = async (v) => {
    const { prov, cit } = filterGeo(v);
    setAvailableProvinces(prov);
    setAvailableCities(cit);
    if (value.region !== v.region) {
      v.province = undefined;
      v.city = undefined;
    }
    if (value.province !== v.province) {
      v.city = undefined;
    }
    setValue(v);
  };

  const fields: TForm<TFormValue>['fields'] = [
    { label: 'Nombre', name: 'name', icon: 'user', size: 0.5, type: 'text' },
    {
      label: 'Primer apellido',
      name: 'surname1',
      size: 0.25,
      autocomplete: 'additional-name',
      help: 'small field with icon',
    },
    {
      label: 'Segundo apellido',
      name: 'surname2',
      size: 0.25,
      autocomplete: 'family-name',
    },
    {
      help: 'Introduce sólo números y letras',
      label: 'DNI',
      icon: 'id-card',
      size: 0.5,
      name: 'dni',
      validator: async (v?: string) => validateDNI(v || ''),
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
      validator: async (v: string | undefined) =>
        v === 'Barcelona' ? ['Barcelona es la única ciudad que no vale'] : [],
    },
    {
      name: 'city',
      disabled: !value.province,
      icon: 'home',
      size: 0.333,
      options: availableCities.map((item) => ({ label: item.name, value: item.name, metadata: item })),
      validator: async (v: string | undefined, form: Partial<TFormValue>) =>
        v === 'val2' && form.region === 'val1' ? ['no vale la opción 2 si region es "First value"'] : [],
    },
    {
      label: 'Comentario',
      name: 'comentario',
      type: 'text-multiline',
      help: `Esto es un **mensaje Acepto** las [condiciones de uso](http://google.com), pero con un texto muy
      largo para *ver qué tal* se ve. <a href="/" target="_blank">Bla bla</a> probando,
      bla progando uno y no sé qué más decir`,
    },
    {
      label: 'Fecha',
      name: 'd',
      size: 0.5,
      type: 'date',
      format: 'dd / MMM / yyyy',
      help: 'Esto es un mensaje',
    },
    {
      label: 'Archivos',
      name: 'f',
      size: 0.5,
      icon: 'file',
      type: 'files',
      extensions: ['.png'],
      validator: (files: File[] | undefined) => {
        if (files?.length !== 2) return ['Select exactly 2 files'];
        return [];
      },
    },
    {
      label: `
Acepto las [condiciones de uso](http://google.com), pero con un texto muy
largo para ver qué tal se ve. <a href="/" target="_blank">Bla bla</a> probando,
bla progando uno y no sé qué más decir
      `,
      name: 'tos',
      type: 'check',
    },
    { label: 'Número', name: 'number', type: 'number' },
  ];

  return (
    <div>
      <FormExample<TFormValue>
        {...{ fields, value, onChange }}
        tileClass="is-dark"
        colors={{ base: 'blue', accent: 'hsl(141, 53%, 53%)', error: 'orange' }}
      />
      <FormExample<TFormValue>
        {...{ fields, value, onChange }}
        tileClass="is-light"
        colors={{ base: '#333', accent: 'orange' }}
      />
      <FormExample<TFormValue> {...{ fields, value, onChange }} tileClass="is-info" colors={{ base: 'yellow' }} />
      <FormExample<TFormValue> {...{ fields, value, onChange }} tileClass="is-success" />
      <FormExample<TFormValue> {...{ fields, value, onChange }} tileClass="is-warning" />
    </div>
  );
};

function FormExample<T>(props: TForm<T> & { tileClass: string }) {
  return (
    <div className="tile is-parent" style={{ margin: '3em' }}>
      <div
        className={`tile is-child notification ${props.tileClass} is-8`}
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
      >
        <Form<T> fields={props.fields} value={props.value} onChange={props.onChange} colors={props.colors} />
      </div>
      <div
        className="tile is-child notification is-light"
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, overflow: 'hidden', padding: 0 }}
      >
        <pre style={{ height: '100%', width: '100%', background: 'none', whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(props.value, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
