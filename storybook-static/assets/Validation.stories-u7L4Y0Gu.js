import { j as t } from './index-Cws_IRuu.js';
import { r as o } from './index-C5e9SFkp.js';
import { F as m, c as S } from './DynamicForm-BFULxm8N.js';
import './index-Dy23IbDT.js';
const C = { component: m, title: 'Validation' },
  f = (e) => {
    const [s, n] = o.useState(e.value),
      [V, g] = o.useState(!1),
      v = (y, h) => {
        (n(y), g(h));
      },
      w = S(e.fields);
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(m, { ...e, onChange: v, value: s, fields: w }),
        t.jsx('pre', { children: JSON.stringify({ isValid: V, value: s }, null, 2) }),
      ],
    });
  },
  a = f.bind({});
a.args = {
  fields: [
    { name: 'password', required: !0, size: 0.5, type: 'password' },
    {
      name: 'password2',
      required: !0,
      size: 0.5,
      type: 'password',
      validator: (e, s) => (e === s.password ? [] : ['Passwords do not match']),
    },
  ],
  value: {},
};
const r = f.bind({});
r.args = {
  fields: [
    {
      fields: [
        { name: 'password', required: !0, size: 0.5, type: 'password' },
        {
          label: 'Password repeat',
          name: 'password2',
          required: !0,
          size: 0.5,
          type: 'password',
          validator: (e, s) => {
            var n;
            return e === ((n = s.user) == null ? void 0 : n.password) ? [] : ['Passwords do not match'];
          },
        },
      ],
      name: 'user',
    },
  ],
  value: {},
};
var l, i, d;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((l = a.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `(args: TForm<TValue>) => {
  const [value, setValue] = useState(args.value);
  const [isValid, setIsValid] = useState(false);
  const onChange: TForm<TValue>['onChange'] = (value, isValid) => {
    setValue(value);
    setIsValid(isValid);
  };
  const fields = clone<typeof args.fields>(args.fields);
  return <>
      <Form<TValue> {...args} {...{
      onChange,
      value
    }} fields={fields} />
      <pre>{JSON.stringify({
        isValid,
        value
      }, null, 2)}</pre>
    </>;
}`,
      ...((d = (i = a.parameters) == null ? void 0 : i.docs) == null ? void 0 : d.source),
    },
  },
};
var u, p, c;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((u = r.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `(args: TForm<TValue>) => {
  const [value, setValue] = useState(args.value);
  const [isValid, setIsValid] = useState(false);
  const onChange: TForm<TValue>['onChange'] = (value, isValid) => {
    setValue(value);
    setIsValid(isValid);
  };
  const fields = clone<typeof args.fields>(args.fields);
  return <>
      <Form<TValue> {...args} {...{
      onChange,
      value
    }} fields={fields} />
      <pre>{JSON.stringify({
        isValid,
        value
      }, null, 2)}</pre>
    </>;
}`,
      ...((c = (p = r.parameters) == null ? void 0 : p.docs) == null ? void 0 : c.source),
    },
  },
};
const E = ['PasswordsEquality', 'PasswordsEqualityDeep'];
export { a as PasswordsEquality, r as PasswordsEqualityDeep, E as __namedExportsOrder, C as default };
