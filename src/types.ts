export type FieldOption<T> = { value: T; label: string } & { metadata?: any };

export type TInput<T> = {
  autocomplete?: string;
  required?: boolean;
  colors?: TColors;
  disabled?: boolean;
  extensions?: string[];
  format?: string;
  max?: number;
  min?: number;
  name: string;
  type?: 'number' | 'text' | 'text-multiline' | 'date' | 'files' | 'check' | 'password';
  options?: FieldOption<T>[];
};

export type TField<T, F> = TInput<T> & {
  help?: string;
  label?: string;
  size?: number;
  icon?: string; // Solid supported, search icon names in https://fontawesome.com/icons
  name: keyof F;
  validator?: TFieldValidator<T, F>;
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
