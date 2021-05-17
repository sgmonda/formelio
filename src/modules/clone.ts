export const clone = <T>(obj: any): T => {
  if (Array.isArray(obj)) return obj.map(clone) as any;
  const copy = JSON.parse(JSON.stringify(obj));
  if (typeof obj === 'object') {
    Object.entries(obj).forEach(([key, val]) => {
      if (typeof val === 'function') copy[key] = val;
      if (val instanceof Date) copy[key] = new Date(val);
    });
  }
  return copy;
};
