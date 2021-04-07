import '@testing-library/jest-dom/extend-expect';

declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}
