import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const getNowYYYY_MM = () => {
  return `${dayjs().year()}_${dayjs().month() + 1}`;
};

export const getDateJs = (YYYY_MM: string) => {
  if (!dayjs(YYYY_MM, ['YYYY_MM', 'YYYY_M']).isValid()) return null;
  return dayjs(YYYY_MM, ['YYYY_MM', 'YYYY_M']).set('date', 1);
};
