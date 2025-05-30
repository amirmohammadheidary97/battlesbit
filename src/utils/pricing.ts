import type {PriceFormat} from '@/types/props/price';

export const getCurrencySymbol = (format: PriceFormat): string => {
  switch (format) {
    case 'USD':
    case 'USDT':
      return 'USDT';
    case 'IRR':
      return 'Tomans';
    case 'EUR':
      return 'EUR';
    case 'GBP':
      return 'GBP';
    case '%':
      return '%';
    case '$':
      return '$';
    default:
      return '';
  }
};

export const formatMainAndDecimal = (amount: number, format?: PriceFormat) => {
  const fixed = amount.toFixed(2);
  const [main, decimal] = fixed.split('.');

  if (format === 'IRR') {
    return {
      mainFormatted: parseInt(main).toLocaleString('en-US'),
      decimalPart: decimal,
    };
  }

  return {
    mainFormatted: main.replace(/\B(?=(\d{3})+(?!\d))/g, format ? ',' : ''),
    decimalPart: decimal,
  };
};
