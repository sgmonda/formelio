import React, { Component } from 'react';
import styles from '../style/index.module.sass';
import { FormelioField } from './FormelioField';
import { Field } from './typings';

type Props<T> = {
  fields: Field<any>[][]; // @TODO Could this "any" be avoided?
  value?: Partial<T>;
};

type State<T> = {
  value: Partial<T>;
};

export class Formelio<T> extends Component<Props<T>, State<T>> {
  public state = { value: this.props.value || {} };

  public render = () => {
    const { fields } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.formelio}>
        {fields.map((row, i) => (
          <div key={i} className={styles.columns}>
            {row.map((field) => (
              <div key={field.name} className={styles.column}>
                <FormelioField<string> {...field} value={value[field.name]} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
}
