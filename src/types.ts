export type FieldOption<T> = { value: T; label: string } & { metadata?: any };

export type TInput<T> = {
  autocomplete?: string;
  disabled?: boolean;
  extensions?: string[];
  format?: string;
  max?: number;
  min?: number;
  name: string;
  type?: 'number' | 'text' | 'date' | 'files';
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

export type TFieldValidator<T, F> = (value: T | undefined, otherValues: Partial<F>) => string[] | Promise<string[]>;
