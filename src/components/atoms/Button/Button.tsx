import type {CSSProperties} from 'react';
import {Typography} from '@mui/material';
import type {ButtonPropsColorOverrides} from '@mui/material/Button';
import Button from '@mui/material/Button';
import type {OverridableStringUnion} from '@mui/types';

type Prop = {
  variant: 'text' | 'outlined' | 'contained';
  color:
    | OverridableStringUnion<
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning',
        ButtonPropsColorOverrides | string
      >
    | string;
  content: string;
  fontSize: string;
  fontWeight: number | string;
  backgroundColor?: string;
  textColor: string;
  styleButton?: CSSProperties;
  styleText?: CSSProperties;
  onClick: () => void;
  disabled?: boolean;
};

const CustomButton = ({
  variant,
  color,
  content,
  fontSize,
  fontWeight,
  backgroundColor,
  textColor,
  styleButton,
  styleText,
  onClick,
  disabled,
}: Prop) => (
  <Button
    disabled={disabled}
    onClick={onClick}
    sx={{backgroundColor: backgroundColor, ...styleButton}}
    variant={variant}
    color={color as any}>
    <Typography
      component={'span'}
      color={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      sx={{...styleText}}>
      {content}
    </Typography>
  </Button>
);

export default CustomButton;
