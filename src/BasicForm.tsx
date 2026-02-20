import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './style/index.module.sass';
import { Field, FieldHandle } from './Field';
import { TColors, TField, TForm } from './types';
import Colors from './Colors';
import cl from 'classnames';
import Markdown from './Markdown';
import { clone, debounce } from './modules';
import { useIsMounted } from './hooks/useIsMounted';

const genId = (field: TField<any, any>) => field.name || 'noname';

function parseFields<T>(_fields: TForm<T>['fields'], base: string): TForm<T>['fields'] {
  const fields: typeof _fields = clone(_fields);
  fields.forEach((field, i) => {
    field.id = field.id || `${base}#${genId(field)}`;
    const nextBase = field.length ? `${field.id}#${i}` : field.id || '';
    if (field.fields) parseFields(field.fields, nextBase);
  });
  return fields;
}

export function BasicForm<T>(props: TForm<T>) {
  const isMounted = useIsMounted();
  const id = useMemo(() => props.id || genId({ name: 'myformid' }), [props.id]);

  const [fields, setFields] = useState<TForm<T>['fields']>(() => parseFields(props.fields, id));
  const [validity, setValidity] = useState<{ [key: string]: boolean }>({ something: false });
  const [value, setValue] = useState<Partial<T>>(props.value || {});

  const validityRef = useRef(validity);
  validityRef.current = validity;
  const valueRef = useRef(value);
  valueRef.current = value;

  const propagateOnChange = useMemo(
    () =>
      debounce(() => {
        const isValid = !Object.values(validityRef.current).some((b) => !b);
        props.onChange(valueRef.current, isValid);
      }, props.delay || 500),
    [props.onChange, props.delay]
  );

  const init = useCallback(
    (initFields: TForm<T>['fields'], initValue: TForm<T>['value'] = props.value) => {
      Promise.all(
        initFields.map(async (field) => {
          const errors = field.name ? await validateField<any, any>(field, initValue?.[field.name], initValue) : [];
          return errors.length > 0;
        })
      ).then((errors) => {
        if (!isMounted()) return;
        const nextValidity: { [key: string]: boolean } = {};
        initFields.forEach((field, i) => {
          nextValidity[field.name as string] = !errors[i];
        });
        setFields(initFields);
        setValidity(nextValidity);
        setValue(initValue || {});
        propagateOnChange();
      });
    },
    [isMounted, propagateOnChange, props.value]
  );

  useEffect(() => {
    init(parseFields(props.fields, id));
  }, []);

  const prevPropsRef = useRef({ fields: props.fields, value: props.value });
  useEffect(() => {
    const hasValueChanged = JSON.stringify(prevPropsRef.current.value) !== JSON.stringify(props.value);
    const hasFieldsChanged = JSON.stringify(prevPropsRef.current.fields) !== JSON.stringify(props.fields);
    prevPropsRef.current = { fields: props.fields, value: props.value };
    if (hasValueChanged || hasFieldsChanged) {
      const nextFields = hasFieldsChanged ? parseFields(props.fields, id) : fields;
      init(nextFields);
    }
  }, [props.value, props.fields]);

  const onFieldChange = useCallback(
    <X,>(field: TField<X, T>, fieldValue: X, isValid: boolean): void => {
      if (!field.name) return;
      setValidity((prev) => {
        const next = { ...prev, [field.name as string]: isValid };
        validityRef.current = next;
        return next;
      });
      setValue((prev) => {
        const next = { ...prev, [field.name as string]: fieldValue };
        valueRef.current = next;
        return next;
      });
      propagateOnChange();
    },
    [propagateOnChange]
  );

  const { colors } = props;
  const fieldGroups = groupFields(fields);

  return (
    <div className={styles.formelio}>
      <form id={id}>
        {fieldGroups.map((group, i) => (
          <div
            key={i}
            className={styles.group}
            style={{
              borderLeft: group.depth > 0 ? `solid 0.1em ${colors?.accent || Colors.ACCENT}20` : 'none',
              marginLeft: `${group.depth > 0 ? 0.5 + (group.depth - 1) : 0}em`,
              paddingLeft: `${group.depth > 0 ? 0.5 : 0}em`,
            }}
          >
            {group.fields.map((field) => (
              <Fragment key={`${group.depth}${field.name || field.label}${i}`}>
                <div
                  className={cl({ [styles.fieldWrapper]: true })}
                  style={{ flexBasis: (field.size || 1) * 100 + '%' }}
                >
                  {!field.name && renderLabel(field, colors)}
                  {field.name && getField<T>(field, value, onFieldChange, props.colors)}
                </div>
              </Fragment>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
}

const groupFields = (fields: TField<any, any>[]) => {
  type TGroup = { depth: number; fields: TField<any, any>[] };
  const groups: Array<TGroup> = [];
  let currentGroup: TGroup = { depth: 0, fields: [] };
  fields.forEach((field) => {
    if ((field.depth || 0) === currentGroup.depth) {
      currentGroup.fields.push(field);
    } else {
      groups.push(currentGroup);
      currentGroup = { depth: field.depth || 0, fields: [field] };
    }
  });
  groups.push(currentGroup);
  return groups;
};

function getField<T>(field: any, value: any, onChange: any, colors?: TColors) {
  switch (field.type) {
    case 'date':
      return <FieldWrapper<Date, T> {...{ colors, field, formValue: value, onChange }} />;
    case 'number':
      return <FieldWrapper<number, T> {...{ colors, field, formValue: value, onChange }} />;
    case 'files':
      return <FieldWrapper<File[], T> {...{ colors, field, formValue: value, onChange }} />;
    case 'check':
      return <FieldWrapper<boolean, T> {...{ colors, field, formValue: value, onChange }} />;
    case 'tags':
      return <FieldWrapper<string[], T> {...{ colors, field, formValue: value, onChange }} />;
    default:
      return <FieldWrapper<string, T> {...{ colors, field, formValue: value, onChange }} />;
  }
}

const renderLabel = (field: TField<any, any>, colors: TForm<any>['colors']) => {
  return (
    <Fragment>
      {field.label && <label style={{ color: colors?.accent || Colors.ACCENT }}>{field.label}:</label>}
      {field.help && (
        <p style={{ fontSize: 'small' }}>
          <Markdown text={field.help} inline />
        </p>
      )}
    </Fragment>
  );
};

function FieldWrapper<T, F>(props: {
  field: TField<T, F>;
  formValue: Partial<F>;
  onChange: (field: TField<T, F>, value: T, isValid: boolean) => void;
  colors?: TColors;
}) {
  const ref = useRef<FieldHandle>(null);
  const onChange = (value: T, isValid: boolean) => props.onChange(props.field, value, isValid);
  const validator = async (value?: T): Promise<string[]> => {
    return validateField(props.field, value, props.formValue);
  };
  useEffect(() => {
    ref.current?.validate();
  }, [props.formValue]);
  return (
    <Field<T, F>
      {...props.field}
      colors={props.colors}
      formValue={props.formValue}
      ref={ref}
      value={props.formValue[props.field.name as any] as any}
      onChange={onChange}
      validator={validator}
    />
  );
}

async function validateField<T, F>(
  field: TField<T, F>,
  value: T | undefined,
  formValue?: Partial<F>
): Promise<string[]> {
  if (field.required && !value) return ['Required field'];
  if (!field.validator || !value) return [];
  if (field.type === 'date' && typeof value === 'string') value = new Date(Date.parse(value)) as any as T;
  return field.validator(value, formValue || {});
}
