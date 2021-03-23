import React, { Component } from 'react';
import styles from './Formelio.module.css'

type Props = {
  text: string;
}

type State = {};

export class Formelio extends Component<Props, State> {
  public render = () => {
    const { text } = this.props;
    return (
      <div className={styles.test}>
        Example Component 2: {text}
      </div>
    );
  }
}

