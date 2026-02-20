import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from '../style/index.module.sass';
import { TFieldProps, TFieldState } from '../types';
import cl from 'classnames';
import Input from '../Input';
import Icon from '../Icon';
import COLORS from '../Colors';
import Hint from './Hint';
import { getBorderColor } from '../modules';
import Markdown from '../Markdown';
import { useIsMounted } from '../hooks/useIsMounted';

const ERROR_HIDE_DELAY = 1000;

export type Props<T, F> = TFieldProps<T, F>;
type State<T> = TFieldState<T>;

export type FieldHandle = {
  validate: () => void;
};

function FieldInner<T, F>(props: Props<T, F>, ref: React.Ref<FieldHandle>) {
  const isMounted = useIsMounted();
  const [errors, setErrors] = useState<string[]>([]);
  const [isDirty, setIsDirty] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [value, setValue] = useState<T | undefined>(props.value);

  const validate = useCallback(
    (currentProps: Props<T, F> = props) => {
      currentProps.validator?.(currentProps.value as T).then((errs) => {
        if (!isMounted()) return;
        setErrors(errs || []);
      });
    },
    [props.validator, props.value, isMounted]
  );

  useImperativeHandle(ref, () => ({ validate: () => validate() }), [validate]);

  const prevValueRef = useRef(props.value);
  useEffect(() => {
    const prev = prevValueRef.current;
    if (prev !== value && !(Number.isNaN(prev) && Number.isNaN(value))) {
      prevValueRef.current = props.value;
      setValue(props.value);
      validate();
    }
  }, [props.value]);

  const prevFormValueRef = useRef(props.formValue);
  useEffect(() => {
    const shouldReset =
      Object.keys(prevFormValueRef.current || {}).length &&
      !Object.keys(props.formValue || {}).length;
    prevFormValueRef.current = props.formValue;
    if (shouldReset) {
      setIsDirty(false);
    }
  }, [props.formValue]);

  const onChange = useCallback(
    async (nextValue: T) => {
      setTimeout(() => {
        if (!isMounted()) return;
        setIsTyping(false);
      }, ERROR_HIDE_DELAY);

      const { validator } = props;
      const errs = (await validator?.(nextValue)) || [];
      if (!isMounted()) return;
      setErrors(errs);
      setIsDirty(true);
      setIsTyping(true);
      setValue(nextValue);
      props.onChange(nextValue, !errs.length);
    },
    [props.validator, props.onChange, isMounted]
  );

  const isError = !!errors.length && !isTyping && isDirty;

  const renderStateIcon = () => {
    const { colors } = props;
    let color: string = 'inherit';
    if (isError) color = colors?.error || COLORS.ERROR;
    else if (isFocused) color = colors?.accent || COLORS.ACCENT;
    return (
      <div
        className={cl({
          [styles.icon]: true,
          [styles.isFocused]: isFocused,
          [styles.isErrored]: isError,
        })}
        style={{ color }}
      >
        <Icon id={isError ? 'exclamation-triangle' : 'question-circle'} />
      </div>
    );
  };

  const renderInput = () => {
    const { help } = props;
    return (
      <Input
        {...props}
        hasHint={isError || !!help}
        isErrored={isError}
        isFocused={isFocused}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    );
  };

  // eslint-disable-next-line complexity
  const renderLabel = () => {
    const { colors, disabled, icon, id, label, name, required } = props;
    const isEmpty = !value;
    let color = 'inherit';
    if (isError) color = colors?.error || COLORS.ERROR;
    else if (isFocused) color = colors?.accent || COLORS.ACCENT;
    return (
      <label
        className={cl({
          [styles.isFocused]: isFocused,
          [styles.isEmpty]: isEmpty,
          [styles.isDisabled]: disabled,
        })}
        style={{ color }}
        htmlFor={id}
      >
        <span style={{ flex: 1 }}>
          {icon && <Icon id={icon} />}
          {' '}<Markdown inline text={label || name || ''} />
          {' '}{required && <span>*</span>}
        </span>
        {Array.isArray(value) && !!value.length && (
          <span>({value.length})</span>
        )}
      </label>
    );
  };

  const renderCheckbox = () => {
    const { colors, id, label, name } = props;
    let color = 'inherit';
    if (isError) color = colors?.error || COLORS.ERROR;
    const borderStyle = getBorderColor({ isErrored: isError });
    return (
      <div
        className={`${styles.checkbox}`}
        style={{ ...borderStyle, color, position: 'relative' }}
      >
        {renderInput()}{' '}
        <label htmlFor={id}>
          <Markdown inline text={label || name || ''} />
        </label>
        {isError && renderStateIcon()}
      </div>
    );
  };

  const { disabled, help, type } = props;
  const hasIcon = isError || help;
  const hasHint = hasIcon && isFocused;

  if (type === 'check') return renderCheckbox();

  return (
    <div
      className={cl({
        [styles.field]: true,
        [styles.isErrored]: isError,
        [styles.isDisabled]: disabled,
      })}
    >
      {renderInput()}
      {renderLabel()}
      {hasIcon && renderStateIcon()}
      {hasHint && (
        <Hint<T, F>
          {...props}
          errors={errors}
          isDirty={isDirty}
          isFocused={isFocused}
          isTyping={isTyping}
          value={value}
        />
      )}
    </div>
  );
}

export const Field = forwardRef(FieldInner) as <T, F>(
  props: Props<T, F> & { ref?: React.Ref<FieldHandle> }
) => ReturnType<typeof FieldInner>;

export default Field;
