import { j as n } from './index-Cws_IRuu.js';
import { r as t } from './index-C5e9SFkp.js';
import { F as i, c as V } from './DynamicForm-BFULxm8N.js';
import './index-Dy23IbDT.js';
const T = { component: i, title: 'Single Field > Date' },
  S = (e) => {
    const [a, d] = t.useState(e.value),
      [u, c] = t.useState(!1),
      m = (f, g) => {
        (d(f), c(g));
      },
      p = V(e.fields);
    return n.jsxs(n.Fragment, {
      children: [
        n.jsx(i, { ...e, onChange: m, value: a, fields: p }),
        n.jsx('pre', { children: JSON.stringify({ isValid: u, value: a }, null, 2) }),
      ],
    });
  },
  s = S.bind({});
s.args = {
  fields: [{ name: 'myfield', type: 'date', validator: (e) => (e.toISOString() < '2021-05-10' ? ['Too early'] : []) }],
  value: { myfield: new Date('2019-01-05') },
};
var r, l, o;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((r = s.parameters) == null ? void 0 : r.docs),
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
      ...((o = (l = s.parameters) == null ? void 0 : l.docs) == null ? void 0 : o.source),
    },
  },
};
const h = ['NonEmptyAndNonRequired'];
export { s as NonEmptyAndNonRequired, h as __namedExportsOrder, T as default };
