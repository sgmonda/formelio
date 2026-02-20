import { useCallback, useEffect, useRef, useState } from 'react';
import { BasicForm } from './BasicForm';
import { clone, flatten, unflatten } from './modules';
import { TField, TForm } from './types';
import { useIsMounted } from './hooks/useIsMounted';

export function Form<T>(props: TForm<T>) {
  const isMounted = useIsMounted();
  const [fields, setFields] = useState<TForm<T>['fields']>(() => getInconditionalFields<T>(props.fields));
  const [value, setValue] = useState<Partial<T> & { [key: string]: any }>(() => flatten(props.value || {}) as any);

  const onChange: TForm<T>['onChange'] = useCallback(
    async (nextValue, nextIsValid) => {
      const nextFields = await cleanFields(props.fields, nextValue);
      if (!isMounted()) return;
      const cleaned = cleanValue(nextValue, nextFields);
      setFields(nextFields);
      setValue(cleaned);
      props.onChange(unflatten(cleaned), nextIsValid);
    },
    [props.fields, props.onChange]
  );

  useEffect(() => {
    cleanFields(props.fields, props.value).then((f) => {
      if (isMounted()) setFields(f);
    });
  }, []);

  const prevValueRef = useRef(props.value);
  const prevFieldsRef = useRef(props.fields);
  useEffect(() => {
    if (prevValueRef.current !== props.value || prevFieldsRef.current !== props.fields) {
      prevValueRef.current = props.value;
      prevFieldsRef.current = props.fields;
      const nextValue = flatten(props.value || {}) as any;
      setValue(nextValue);
      cleanFields(props.fields, props.value).then((f) => {
        if (isMounted()) setFields(f);
      });
    }
  }, [props.value, props.fields]);

  return <BasicForm {...props} fields={fields} value={value} onChange={onChange} />;
}

function getInconditionalFields<T>(fields: TForm<T>['fields']): TForm<T>['fields'] {
  return fields
    .filter((f) => !f.when)
    .map((f) => (f.fields ? { ...f, fields: getInconditionalFields<any>(f.fields) } : f));
}

// eslint-disable-next-line complexity
async function cleanFields<T>(
  fields: any,
  formValue: Partial<T> = {},
  depth: number = 0
): Promise<TForm<T>['fields']> {
  let nextFields: TForm<T>['fields'] = [];

  // eslint-disable-next-line complexity
  const insertField = async (f: TField<any, any>) => {
    let isPresent = false;
    if (f.when) {
      const promises = f.when.map((condition) => condition(unflatten(formValue) || {}));
      const partials = await Promise.all(promises);
      isPresent = partials.every((re) => !!re);
    } else {
      isPresent = true;
    }
    if (!isPresent) return;

    if (f.validator) {
      const validator = f.validator;
      f.validator = (value: any, formValue: any) => {
        return validator(value, unflatten(formValue));
      };
    }

    if (!f.fields) {
      nextFields.push(f as any);
      return;
    }

    let subfields = await cleanFields(f.fields || [], formValue, (f.depth || 0) + 1);

    if (f.length) {
      const length = f.length(formValue || {});
      for (let i = 0; i < length; i++) {
        nextFields.push({
          depth: f.depth || 0,
          label: `${f.label || f.name} (${i + 1})`,
        });
        for (const sf of subfields) {
          await insertField({
            ...sf,
            depth: (sf.depth || 0) - 1,
            label: sf.label || sf.name,
            name: sf.name && (`${f.name}.${i}.${sf.name}` as any),
          });
        }
      }
    } else {
      nextFields.push({
        depth: f.depth,
        label: `${f.label || f.name}`,
      });
      for (const sf of subfields) {
        await insertField({
          ...sf,
          depth: sf.depth || 0,
          label: sf.label || sf.name,
          name: sf.name && (`${f.name}.${sf.name}` as any),
        });
      }
    }
  };

  for (const f of fields) {
    await insertField({ ...f, depth });
  }
  return nextFields;
}

function cleanValue<T>(value: Partial<T>, fields: TForm<any>['fields']): Partial<T> {
  const keys = fields.reduce(
    (accum, f) => {
      if (f.name) accum[f.name] = true;
      return accum;
    },
    {} as { [key: string]: boolean }
  );
  const nextValue = clone<typeof value>(value);
  Object.keys(nextValue).forEach((key) => {
    if (!keys[key]) delete (nextValue as any)[key];
  });
  return nextValue;
}
