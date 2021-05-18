import _ from 'lodash';
import React, { createRef, Fragment, useEffect } from 'react';
import styles from './style/index.module.sass';
import { Field } from './Field';
import { TColors, TField, TForm } from './types';
import Colors from './Colors';
import cl from 'classnames';
import Markdown from './Markdown';
import { Component } from './Component';
import { clone } from './modules';

type State<T> = {
  fields: TForm<T>['fields'];
  validity: { [key: string]: boolean };
  value: Partial<T>;
};

const genId = (field: TField<any, any>) => field.name || 'noname';
// const genId = () => Math.random().toString(36).slice(2);

function parseFields<T>(_fields: TForm<T>['fields'], base: string): TForm<T>['fields'] {
  const fields: typeof _fields = clone(_fields);
  fields.forEach((field, i) => {
    field.id = field.id || `${base}#${genId(field)}`;
    const nextBase = field.length ? `${field.id}#${i}` : field.id || '';
    if (field.fields) parseFields(field.fields, nextBase);
  });
  return fields;
}

export class BasicForm<T> extends Component<TForm<T>, State<T>> {
  private id: string = this.props.id || genId({ name: 'myformid' });

  constructor(props: TForm<T>) {
    super(props);
    const fields = parseFields(props.fields, this.id);
    this.state = {
      fields,
      validity: { something: false }, // Not valid by default, until first validation
      value: props.value || {},
    };
    this.init(fields);
  }

  private init = (fields: TForm<T>['fields'], value: TForm<T>['value'] = this.props.value) => {
    Promise.all(
      fields.map(async (field) => {
        const errors = field.name ? await validateField<any, any>(field, value?.[field.name], value) : [];
        return errors.length > 0;
      })
    ).then((errors) => {
      if (!this.isMounted) return;
      const validity = {};
      fields.forEach((field, i) => {
        validity[field.name as string] = !errors[i];
      });

      // Hack to force Webkit autofill transition restart
      // Disabled because this makes inputs rebuild, so they lose focus and other state
      // this.setState({ fields: [] });

      this.setState({ fields, validity, value: value || {} });
      this.propagateOnChange();
    });
  };

  private propagateOnChange = _.debounce(() => {
    const isValid = !Object.values(this.state.validity).some((b) => !b);
    this.props.onChange(this.state.value, isValid);
  }, this.props.delay || 500);

  private onChange<X>(field: TField<X, T>, value: X, isValid: boolean): void {
    if (!field.name) return;
    this.setState({
      validity: { ...this.state.validity, [field.name]: isValid },
      value: { ...this.state.value, [field.name]: value },
    });
    this.propagateOnChange();
  }

  public componentDidUpdate = (prevProps: TForm<T>) => {
    const hasValueChanged = JSON.stringify(prevProps.value) !== JSON.stringify(this.props.value);
    const hasFieldsChanged = JSON.stringify(prevProps.fields) !== JSON.stringify(this.props.fields);
    if (hasValueChanged || hasFieldsChanged) {
      const fields = hasFieldsChanged ? parseFields(this.props.fields, this.id) : this.state.fields;
      this.init(fields);
    }
  };

  public render = () => {
    const { colors } = this.props;
    const { fields, value } = this.state;
    const fieldGroups = groupFields(fields);
    return (
      <div className={styles.formelio}>
        <form id={this.id}>
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
                    {field.name && getField<T>(field, value, this.onChange.bind(this), this.props.colors)}
                  </div>
                </Fragment>
              ))}
            </div>
          ))}
        </form>
      </div>
    );
  };
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

// @TODO Don't use "any" here
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

/**
 * Intermediate component to let field handlers receive form data without passing
 * any form info to the Field class itself. This way <Field/> does not need to know about <Form/>
 */
function FieldWrapper<T, F>(props: {
  field: TField<T, F>;
  formValue: Partial<F>;
  onChange: (field: TField<T, F>, value: T, isValid: boolean) => void;
  colors?: TColors;
}) {
  const ref = createRef<Field<T, F>>();
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
