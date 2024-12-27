import {Button, ButtonGroup, useTheme} from '@mui/material';

type Props<T> = {
  options: [T, T];
  selectedOption: T;
  setSelectedOption: (option: T) => void;
  getLabel: (option: T) => string;
  getValue: (option: T) => string | number;
  height?: string;
};

export const DoubleButtonSwitch = <T,>({
  options,
  selectedOption,
  setSelectedOption,
  getLabel,
  getValue,
  height = '3rem',
}: Props<T>) => {
  //
  const theme = useTheme();
  const firstOptionIsSelected =
    getValue(selectedOption) === getValue(options[0]);
  const secondOptionIsSelected =
    getValue(selectedOption) === getValue(options[1]);
  //
  return (
    <ButtonGroup
      disableElevation
      component={'div'}
      // variant="contained"
      sx={{
        height,
        width: 1,
        button: {
          textTransform: 'none',
        },
      }}>
      <Button
        onClick={() => {
          setSelectedOption(options[0]);
        }}
        className="double-button-switch-option1"
        color="primary"
        variant={firstOptionIsSelected ? 'contained' : 'outlined'}
        sx={{
          borderRight: '0px !important',
          borderRadius: theme.shape.borderRadius,
          width: '50%',
        }}>
        {getLabel(options[0])}
      </Button>
      <Button
        onClick={() => {
          setSelectedOption(options[1]);
        }}
        className="double-button-switch-option2"
        color={'primary'}
        variant={secondOptionIsSelected ? 'contained' : 'outlined'}
        sx={{
          borderRadius: theme.shape.borderRadius,
          width: '50%',
        }}>
        {getLabel(options[1])}
      </Button>
    </ButtonGroup>
  );
};
