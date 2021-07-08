import { range } from 'lodash';

export const getMonthList = (locales?: string | string[], format: 'long' | 'short' = 'long'): string[] => {
  const year = new Date().getFullYear(); // 2020
  const monthList = range(0, 12); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const formatter = new Intl.DateTimeFormat(locales, { month: format });

  const getMonthName = (monthIndex: number) => formatter.format(new Date(year, monthIndex));
  return monthList.map((i) => getMonthName(i));
};
