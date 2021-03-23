import React, { Component } from 'react';
import styles from '../style/index.module.sass';
import { Field } from './typings';

type Props = {
  fields: Field[][];
};

type State = {};

export class Formelio extends Component<Props, State> {
  public render = () => {
    const { fields } = this.props;
    return (
      <div className={styles.formelio}>
        This is Formelio!
        <pre>{JSON.stringify(fields)}</pre>
        <div className={styles.columns}>
          <div className={styles.column}>hello</div>
          <div className={styles.column}>hello</div>
          <div className={styles.column}>hello</div>
          <div className={styles.column}>hello</div>
        </div>
      </div>
    );
  };
}
