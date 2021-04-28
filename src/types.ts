export type FieldOption<T> = { value: T | string; label?: string } & { metadata?: any };

export type TInput<T> = {
  autocomplete?: string;
  required?: boolean;
  colors?: TColors;
  disabled?: boolean;
  extensions?: string[];
  format?: string;
  max?: number;
  min?: number;
  name?: string;
  type?: 'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password';
  options?: FieldOption<T>[];
};

type TCondition<F> = (formValue: Partial<F>) => boolean | Promise<boolean>;

export type TField<T, F> = TInput<T> & {
  depth?: number;
  help?: string;
  label?: string;
  size?: number;
  icon?: string; // Solid supported, search icon names in https://fontawesome.com/icons
  name?: keyof F;
  validator?: TFieldValidator<T, F>;
  when?: TCondition<F>[];
  length?: (formValue: Partial<F>) => number;
  fields?: TForm<any>['fields'];
};

export type TColors = {
  base?: string;
  accent?: string;
  error?: string;
};

export type TFieldValidator<T, F> = (value: T, otherValues: Partial<F>) => string[] | Promise<string[]>;

export type TInputProps<T> = TInput<T> & {
  borderColor?: string;
  value?: T;
  hasHint?: boolean;
  isErrored: boolean;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: T) => void;
};

export type TFieldProps<T, F> = TField<T, F> & {
  formValue: Partial<F>;
  onChange: (value: T, isValid: boolean) => void;
  validator: (value: T) => Promise<string[]>;
  value?: T;
};

export type TFieldState<T> = {
  errors: string[];
  isFocused: boolean;
  isTyping: boolean;
  isDirty: boolean;
  value: T | undefined;
};

type TypedTField<T> =
  | (TField<string, T> & { type: 'text' })
  | (TField<string, T> & { type: 'password' })
  | (TField<string, T> & { type: 'text-multiline' })
  | (TField<string, T> & { type: 'select' })
  | (TField<string[], T> & { type: 'tags' })
  | (TField<Date, T> & { type: 'date' })
  | (TField<File[], T> & { type: 'files' })
  | (TField<number, T> & { type: 'number' })
  | (TField<boolean, T> & { type: 'check' })
  | Omit<TField<string, T>, 'type'>;

export type TForm<T> = {
  delay?: number;
  colors?: TColors;
  fields: TypedTField<T>[];
  onChange: (value: Partial<T>, isValid: boolean) => void;
  value?: Partial<T>;
};
