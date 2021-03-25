/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

export type FieldOption = { value: string; label: string } & { metadata: any };

export type InputAttributes = {
  disabled?: boolean;
  autocomplete?: string;
  name: string;
  options?: Array<FieldOption>;
  disabled?: boolean;
  type: 'number' | 'text' | 'date';
};

export type Field<T> = InputAttributes & {
  size?: number;
  label?: string;
  help?: string;
  validator?: (value: T, otherValues?: { [key: string]: any }) => Promise<string[]>;
};
