export const clone = <T>(obj: any): T => {
  if (Array.isArray(obj)) return obj.map(clone) as any;
  if (obj instanceof Date) return new Date(obj) as any;
  if (typeof obj === 'function') return obj;
  if (typeof obj === 'object') {
    const copy = {};
    Object.entries(obj).forEach(([key, val]) => {
      copy[key] = clone(val);
    });
    return copy as any;
  }
  return JSON.parse(JSON.stringify(obj));
};
