export const range = (start: number, end: number, step = 1): number[] =>
  Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => start + i * step);
