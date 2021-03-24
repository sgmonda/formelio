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

export type Field<T> = {
  name: string;
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
  /** bla bla size */
  size?: number;
  label?: string;
  help?: string;
  validator?: (value: T) => Promise<string[]>;
  // @TODO Add more props
};
