declare module '*.md' {
  const value: string;
  export default value;
}

declare module '!raw-loader!*' {
  const content: string;
  export default content;
}
