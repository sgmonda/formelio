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
  type?: 'number' | 'text' | 'text-multiline' | 'date' | 'files' | 'check';
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

export type TFieldValidator<T, F> = (value: T | undefined, otherValues: Partial<F>) => string[] | Promise<string[]>;
