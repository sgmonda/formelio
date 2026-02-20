import { j as n } from './index-Cws_IRuu.js';
import { r as h } from './index-C5e9SFkp.js';
import { F as L, c as D } from './DynamicForm-BFULxm8N.js';
import './index-Dy23IbDT.js';
const P = '(^[XYZ]\\d{7}[A-Z]$)|(^\\d{7,8}[A-Z]$)',
  U = {
    0: 'T',
    1: 'R',
    2: 'W',
    3: 'A',
    4: 'G',
    5: 'M',
    6: 'Y',
    7: 'F',
    8: 'P',
    9: 'D',
    10: 'X',
    11: 'B',
    12: 'N',
    13: 'J',
    14: 'Z',
    15: 'S',
    16: 'Q',
    17: 'V',
    18: 'H',
    19: 'L',
    20: 'C',
    21: 'K',
    22: 'E',
  },
  B = { X: '0', Y: '1', Z: '2' },
  G = async (s) => {
    if (!s) return [];
    if (!new RegExp(P).test(s)) return ['Wrong format. Use numbers and upper case letters only'];
    const [, c, p, g] = s.match(/([XYZ])?(\d+)([A-Z])$/) || [],
      f = parseInt((B[c] || 0) + p) % 23,
      m = U[`${f}`];
    return m !== g ? [`Wrong letter. Expected ${m}`] : [];
  },
  ee = { component: L, title: 'Single Field > Text' },
  e = (s) => {
    const [c, p] = h.useState(s.value),
      [g, V] = h.useState(!1),
      f = (Y, k) => {
        (p(Y), V(k));
      },
      m = D(s.fields);
    return n.jsxs(n.Fragment, {
      children: [
        n.jsx(L, { ...s, onChange: f, value: c, fields: m }),
        n.jsx('pre', { children: JSON.stringify({ isValid: g, value: c }, null, 2) }),
      ],
    });
  },
  a = e.bind({});
a.args = { fields: [{ name: 'myfield' }], value: { myfield: 'Hello, world' } };
const r = e.bind({});
r.args = { fields: [{ name: 'myfield' }] };
const l = e.bind({});
l.args = { fields: [{ help: 'This is a help message, **this *supports* markdown**', name: 'myfield' }] };
const t = e.bind({});
t.args = { fields: [{ icon: n.jsx('span', { 'aria-hidden': 'true', children: '👤' }), name: 'myfield' }] };
const i = e.bind({});
i.args = {
  fields: [
    {
      help: 'This is a help message, **this *supports* markdown**',
      icon: n.jsx('span', { 'aria-hidden': 'true', children: '👤' }),
      name: 'myfield',
    },
  ],
};
const o = e.bind({});
o.args = { fields: [{ name: 'myfield', required: !0 }] };
const d = e.bind({});
d.args = { fields: [{ help: 'This is a help message, **this *supports* markdown**', name: 'myfield', required: !0 }] };
const u = e.bind({});
u.args = { fields: [{ help: 'Spanish identity number', label: 'DNI', name: 'myfield', required: !0, validator: G }] };
var v, T, y;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((v = a.parameters) == null ? void 0 : v.docs),
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
      ...((y = (T = a.parameters) == null ? void 0 : T.docs) == null ? void 0 : y.source),
    },
  },
};
var S, F, C;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((S = r.parameters) == null ? void 0 : S.docs),
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
      ...((C = (F = r.parameters) == null ? void 0 : F.docs) == null ? void 0 : C.source),
    },
  },
};
var E, I, N;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((E = l.parameters) == null ? void 0 : E.docs),
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
      ...((N = (I = l.parameters) == null ? void 0 : I.docs) == null ? void 0 : N.source),
    },
  },
};
var A, R, q;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((A = t.parameters) == null ? void 0 : A.docs),
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
      ...((q = (R = t.parameters) == null ? void 0 : R.docs) == null ? void 0 : q.source),
    },
  },
};
var x, b, W;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((x = i.parameters) == null ? void 0 : x.docs),
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
      ...((W = (b = i.parameters) == null ? void 0 : b.docs) == null ? void 0 : W.source),
    },
  },
};
var J, O, H;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((J = o.parameters) == null ? void 0 : J.docs),
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
      ...((H = (O = o.parameters) == null ? void 0 : O.docs) == null ? void 0 : H.source),
    },
  },
};
var j, Z, w;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((j = d.parameters) == null ? void 0 : j.docs),
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
      ...((w = (Z = d.parameters) == null ? void 0 : Z.docs) == null ? void 0 : w.source),
    },
  },
};
var X, _, $;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((X = u.parameters) == null ? void 0 : X.docs),
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
      ...(($ = (_ = u.parameters) == null ? void 0 : _.docs) == null ? void 0 : $.source),
    },
  },
};
const se = [
  'NonEmptyAndNonRequired',
  'EmptyAndNonRequired',
  'EmptyAndNonRequiredWithHelp',
  'EmptyAndNonRequiredWithIcon',
  'EmptyAndNonRequiredWithIconAndHelp',
  'EmptyAndRequired',
  'EmptyAndRequiredWithHelp',
  'EmptyAndRequiredWithCustomValidator',
];
export {
  r as EmptyAndNonRequired,
  l as EmptyAndNonRequiredWithHelp,
  t as EmptyAndNonRequiredWithIcon,
  i as EmptyAndNonRequiredWithIconAndHelp,
  o as EmptyAndRequired,
  u as EmptyAndRequiredWithCustomValidator,
  d as EmptyAndRequiredWithHelp,
  a as NonEmptyAndNonRequired,
  se as __namedExportsOrder,
  ee as default,
};
