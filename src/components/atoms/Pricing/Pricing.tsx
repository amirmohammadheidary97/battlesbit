import {useEffect, useRef} from 'react';
import type {TypographyProps} from '@mui/material';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import gsap from 'gsap';

import type {PriceFormat} from '@/types/props/price';
import {formatMainAndDecimal, getCurrencySymbol} from '@/utils/pricing';

type TypographyCustomProps = Pick<
  TypographyProps,
  'variant' | 'color' | 'sx' | 'fontWeight' | 'fontSize'
>;

type Prop = {
  formatPrice: PriceFormat;
  amount: number;
  mainTextProps?: TypographyCustomProps;
  decimalTextProps?: TypographyCustomProps;
  symbolTextProps?: TypographyCustomProps;
  hideDecimalIfZero?: boolean;
  iShowBalance?: boolean;
  isPriceLimit?: boolean;
  lowLimitColor?: string;
  highLimitColor?: string;
};

const Pricing = ({
  formatPrice,
  amount,
  mainTextProps,
  decimalTextProps,
  symbolTextProps,
  hideDecimalIfZero = false,
  iShowBalance = true,
  isPriceLimit = false,
  highLimitColor = 'success.main',
  lowLimitColor = 'error.main',
}: Prop) => {
  const symbol = getCurrencySymbol(formatPrice);
  const {mainFormatted, decimalPart} = formatMainAndDecimal(
    Math.abs(amount),
    formatPrice,
  );

  const shouldShowDecimal = !(hideDecimalIfZero && decimalPart === '00');

  let mainTextColor = mainTextProps?.color;
  let mainTextContent = mainFormatted;

  if (isPriceLimit) {
    if (amount > 0) {
      mainTextColor = highLimitColor;
      mainTextContent = `+${mainFormatted}`;
    } else if (amount < 0) {
      mainTextColor = lowLimitColor;
      mainTextContent = `-${mainFormatted}`;
    }
  }

  const priceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priceRef.current) {
      gsap.fromTo(
        priceRef.current,
        {opacity: 0, y: 5},
        {opacity: 1, y: 0, duration: 0.3, ease: 'power2.out'},
      );
    }
  }, [amount, iShowBalance]);

  return (
    <Grid>
      <div ref={priceRef} style={{display: 'inline-flex'}}>
        {iShowBalance ? (
          <Grid display={'flex'} alignItems={'baseline'}>
            <Typography
              component="span"
              {...mainTextProps}
              color={mainTextColor}>
              {mainTextContent}
              {shouldShowDecimal && formatPrice !== 'IRR' && '.'}
            </Typography>

            {shouldShowDecimal && formatPrice !== 'IRR' && (
              <Typography
                display={'flex'}
                alignItems={'flex-end'}
                color={mainTextColor}
                component="span"
                {...decimalTextProps}>
                {decimalPart}
              </Typography>
            )}

            {symbol && (
              <Typography
                component="span"
                {...symbolTextProps}
                display={'flex'}
                alignItems={'flex-end'}
                color={isPriceLimit ? mainTextColor : symbolTextProps?.color}
                sx={{ml: 0.5, ...(symbolTextProps?.sx || {})}}>
                {symbol}
              </Typography>
            )}
          </Grid>
        ) : (
          <Typography component="span" {...mainTextProps}>
            {'*********'}
          </Typography>
        )}
      </div>
    </Grid>
  );
};

export default Pricing;
