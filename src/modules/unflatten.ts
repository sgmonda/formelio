function setValue(object: { [key: string]: any }, key: string, value: any): void {
  const parts = key.split('.');
  if (parts.length === 1) {
    object[parts[0]] = value;
    return;
  }
  if (/^\d+$/.test(parts[0]) && !object[parts[0]]) object[parts[0]] = {};
  return setValue(object[parts[0]], parts.slice(1).join('.'), value);
}
export function unflatten<T>(object: { [key: string]: any }): T {
  const accum: { [key: string]: any } = {};
  const obj = Object.entries(object).reduce((accum, [key, value]) => {
    if (!key.includes('.')) {
      accum[key] = value;
    } else {
      const parts = key.split('.');
      accum[parts[0]] = accum[parts[0]] || (/\d+/.test(parts[1]) ? [] : {});
      setValue(accum[parts[0]], parts.slice(1).join('.'), value);
    }
    return accum;
  }, accum);
  return obj as T;
}
