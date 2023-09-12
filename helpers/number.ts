export const formatCurrency = (number = 0) => {
  const usFormatter = new Intl.NumberFormat('en-US');
  return usFormatter.format(number);
};

export const roundNumber = (digits: number) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(digits);
};
