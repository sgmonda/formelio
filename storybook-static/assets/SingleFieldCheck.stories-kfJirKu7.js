import { j as t } from './index-Cws_IRuu.js';
import { r as d } from './index-C5e9SFkp.js';
import { F as I, c as J } from './DynamicForm-BFULxm8N.js';
import './index-Dy23IbDT.js';
const _ = { component: I, title: 'Single Field > Check' },
  r = (i) => {
    const [o, N] = d.useState(i.value),
      [q, x] = d.useState(!1),
      b = (R, A) => {
        (N(R), x(A));
      },
      O = J(i.fields);
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(I, { ...i, onChange: b, value: o, fields: O }),
        t.jsx('pre', { children: JSON.stringify({ isValid: q, value: o }, null, 2) }),
      ],
    });
  },
  e = r.bind({});
e.args = { fields: [{ name: 'myfield', type: 'check' }] };
const s = r.bind({});
s.args = { fields: [{ name: 'myfield', type: 'check' }], value: { myfield: !0 } };
const a = r.bind({});
a.args = { fields: [{ name: 'myfield', type: 'check', required: !0 }] };
const n = r.bind({});
n.args = {
  fields: [
    { label: 'I accept the [terms and conditions](https://example.com)', name: 'myfield', required: !0, type: 'check' },
  ],
};
const l = r.bind({});
l.args = { fields: [{ help: 'You must accept to continue', name: 'myfield', required: !0, type: 'check' }] };
var u, c, m;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((u = e.parameters) == null ? void 0 : u.docs),
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
      ...((m = (c = e.parameters) == null ? void 0 : c.docs) == null ? void 0 : m.source),
    },
  },
};
var f, g, p;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((f = s.parameters) == null ? void 0 : f.docs),
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
      ...((p = (g = s.parameters) == null ? void 0 : g.docs) == null ? void 0 : p.source),
    },
  },
};
var V, h, v;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((V = a.parameters) == null ? void 0 : V.docs),
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
      ...((v = (h = a.parameters) == null ? void 0 : h.docs) == null ? void 0 : v.source),
    },
  },
};
var T, S, C;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((T = n.parameters) == null ? void 0 : T.docs),
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
      ...((C = (S = n.parameters) == null ? void 0 : S.docs) == null ? void 0 : C.source),
    },
  },
};
var y, F, k;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((y = l.parameters) == null ? void 0 : y.docs),
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
      ...((k = (F = l.parameters) == null ? void 0 : F.docs) == null ? void 0 : k.source),
    },
  },
};
const H = ['UncheckedAndNonRequired', 'CheckedAndNonRequired', 'UncheckedAndRequired', 'WithCustomLabel', 'WithHelp'];
export {
  s as CheckedAndNonRequired,
  e as UncheckedAndNonRequired,
  a as UncheckedAndRequired,
  n as WithCustomLabel,
  l as WithHelp,
  H as __namedExportsOrder,
  _ as default,
};
