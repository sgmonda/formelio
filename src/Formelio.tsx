import React, { Component } from 'react';
import styles from '../style/index.module.sass';
import { FormelioField } from './FormelioField';
import { Field } from './typings';

export type Props<T> = {
  fields: Field<any>[]; // @TODO Could this "any" be avoided?
  onChange: (value: Partial<T>) => Promise<void>;
  value?: Partial<T>;
};

type State<T> = {
  validity: { [key: string]: boolean };
  value: Partial<T>;
};

export class Formelio<T> extends Component<Props<T>, State<T>> {
  public state = { validity: {}, value: this.props.value || {} };

  private onChange = (field: Field<any>, value: any, isValid: boolean) => {
    this.setState({
      validity: { ...this.state.validity, [field.name]: isValid },
      value: { ...this.state.value, [field.name]: value },
    });
    this.props.onChange(this.state.value);
    return value;
  };

  public render = () => {
    const { fields } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.formelio}>
        {fields.map((field) => (
          <div key={field.name} className={styles.field} style={{ flexBasis: (field.size || 1) * 100 + '%' }}>
            <FormelioField<string>
              {...field}
              value={value[field.name]}
              onChange={(value: string, isValid: boolean) => this.onChange(field, value, isValid)}
            />
          </div>
        ))}
      </div>
    );
  };
}
