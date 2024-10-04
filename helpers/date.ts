import dayjs from 'dayjs';

require('dayjs/locale/es');

export const getCurrentMonth = (locale = 'en') => {
  return dayjs().locale(locale).format('MMMM YYYY');
};
