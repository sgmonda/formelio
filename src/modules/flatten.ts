const isPrimitiveType = (value: any) => {
  return value !== Object(value);
};

export const flatten = (object: Object): { [key: string]: any } => {
  if (object === null || object === undefined) return {};
  const result: { [key: string]: any } = {};
  return Object.entries(object).reduce((accum, [key, value]) => {
    if (value instanceof Date) accum[key] = new Date(Date.parse(value as any));
    else if (typeof value !== 'object' || value instanceof File) accum[key] = value;
    else if (Array.isArray(value) && value.every(isPrimitiveType)) accum[key] = value;
    else {
      const partial = flatten(value);
      Object.entries(partial).forEach(([k, v]) => {
        partial[`${key}.${k}`] = v;
        delete partial[k];
      });
      accum = { ...accum, ...partial };
    }
    return accum;
  }, result);
};
