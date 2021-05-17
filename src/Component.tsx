/**
 * This is needed to avoid state updates when a promise is finished.
 * This is an antipattern, as described in https://es.reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 * so this approach should be replaced by something more sofisticated.
 * For the moment, there is no way to cancel promises, so we need to check if component
 * is mounted once they're resolved.
 */

import { Component as _Component } from 'react';

export class Component<Props, State> extends _Component<Props, State> {
  protected _isMounted: boolean;
  constructor(props: Props) {
    super(props);
    this._isMounted = false;
  }
  // public set isMounted(status: boolean) {
  //   this._isMounted = status;
  // }
  public get isMounted() {
    return this._isMounted;
  }
  public componentDidMount = () => {
    this._isMounted = true;
  };
  public componentWillUnmount = () => {
    this._isMounted = false;
  };
}
