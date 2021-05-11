import React, { createRef, Fragment, useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import styles from '../../style/index.module.sass';
import { TFieldProps, TFieldState } from '../types';
import COLORS from '../Colors';
import Markdown from '../Markdown';

function Hint<T, F>(props: TFieldProps<T, F> & TFieldState<T>) {
  const { colors, errors, help, isDirty, isFocused, isTyping } = props;
  const isError = !!errors.length && !isTyping && isDirty;

  const refTarget = createRef<HTMLDivElement>();
  const refPopper = createRef<HTMLDivElement>();

  useEffect(() => {
    if (refTarget.current && refPopper.current) {
      createPopper(refTarget.current, refPopper.current, { placement: 'top-start' });
    }
  }, []);

  let backgroundColor = undefined;
  if (isError) backgroundColor = colors?.error || COLORS.ERROR;
  else if (isFocused) backgroundColor = colors?.accent || COLORS.ACCENT;
  const message = isError ? errors.join('\n\n') : help;

  return (
    <Fragment>
      <div className={styles.hintTarget} ref={refTarget} />
      <div className={styles.hint} ref={refPopper} style={{ backgroundColor }}>
        <Markdown text={isFocused ? message || '' : ''} inline />
        <div className={styles.arrow} data-popper-arrow></div>
        {/* <div className={styles.spike} style={{ borderTopColor: backgroundColor }} /> */}
      </div>
    </Fragment>
  );
}

export default Hint;
