/* eslint-disable sort-keys */

/**
 * Checks if a NIE/NIF is valid, checking format and letter
 * See http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie
 */

const PATTERN = '(^[XYZ]\\d{7}[A-Z]$)|(^\\d{7,8}[A-Z]$)';

const LETTERS: { [key: string]: string } = {
  0: 'T',
  1: 'R',
  2: 'W',
  3: 'A',
  4: 'G',
  5: 'M',
  6: 'Y',
  7: 'F',
  8: 'P',
  9: 'D',
  10: 'X',
  11: 'B',
  12: 'N',
  13: 'J',
  14: 'Z',
  15: 'S',
  16: 'Q',
  17: 'V',
  18: 'H',
  19: 'L',
  20: 'C',
  21: 'K',
  22: 'E',
};

const NIE_PREFFIX_VALUES: { [key: string]: string } = {
  X: '0',
  Y: '1',
  Z: '2',
};

export const validateDNI = async (dni: string): Promise<string[]> => {
  if (!dni) return [];
  if (!new RegExp(PATTERN).test(dni)) {
    return ['Wrong format. Use numbers and upper case letters only'];
  }
  const [, preffix, num, letter] = (dni.match(/([XYZ])?(\d+)([A-Z])$/) || []) as string[];
  const number = parseInt((NIE_PREFFIX_VALUES[preffix] || 0) + num);
  const mod = number % 23;
  const expectedLetter = LETTERS[`${mod}`];
  if (expectedLetter !== letter) {
    return [`Wrong letter. Expected ${expectedLetter}`];
  }
  return [];
};

export default validateDNI;
