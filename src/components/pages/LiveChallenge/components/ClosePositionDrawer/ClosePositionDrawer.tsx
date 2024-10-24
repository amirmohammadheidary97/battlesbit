/* eslint-disable max-lines */
import type {SubmitHandler} from 'react-hook-form';
import {useController, useForm} from 'react-hook-form';
import {
  Box,
  Button,
  Drawer,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {usePositionsState} from '../../state/positions.state';
import {getPositionChips} from '../../utils/getPositionChips';
import type {PositionChipProps} from '../PositionItem/components/PositionChip';
import {PositionChip} from '../PositionItem/components/PositionChip';

import {Center} from '@/components/atoms/Center';
import {AmountSlider} from '@/components/molecules/AmountSlider';
import {ModalHeader} from '@/components/molecules/ModalHeader';

const MAX = 1000;
type Inputs = {
  price: number;
  amount: number;
};
export const ClosePositionDrawer = () => {
  //
  const theme = useTheme();
  const {setSelectedPositionToClose, selectedPositionToClose} =
    usePositionsState();
  const {control, register, getValues, handleSubmit} = useForm<Inputs>();
  const {
    field: {onChange: onAmountChange, value: amountValue},
  } = useController({control, name: 'amount'});

  const isOpen = Boolean(selectedPositionToClose);
  const onClose = () => setSelectedPositionToClose(undefined);
  const chips: PositionChipProps[] = selectedPositionToClose
    ? getPositionChips(selectedPositionToClose)
    : [];

  const onSubmit: SubmitHandler<Inputs> = values => {
    console.log(values);
  };
  //
  return (
    <Drawer
      open={isOpen}
      anchor="bottom"
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          backgroundImage: 'none',
        },
        '.position-chip-other , .MuiInputBase-root': {
          backgroundColor: theme.palette.background.default,
        },
        '.slider-mark': {
          backgroundColor: theme.palette.background.paper,
          borderColor: theme.palette.background.paper,
        },
        '.MuiInputBase-root': {
          borderRadius: theme.shape.borderRadius,
        },
      }}>
      <Grid container size={12} spacing={1} p={2}>
        {/* Header */}
        <ModalHeader
          onClose={onClose}
          title="Close"
          containerProps={{sx: {p: 0}}}
        />
        {/* Asset name and chips */}
        <Grid container spacing={0.5}>
          <Grid>
            <Typography variant="button" color={theme.palette.text.primary}>
              BTC/USDT
            </Typography>
          </Grid>
          {chips?.length &&
            chips.map(chip => (
              <Grid key={chip.value}>
                <PositionChip {...chip} />
              </Grid>
            ))}
        </Grid>
        {/* properties */}
        <Grid container size={12}>
          <TitleValue
            title="Entry Price"
            value={selectedPositionToClose?.entryPrice ?? ''}
          />
          <TitleValue
            title="Limit Price"
            value={selectedPositionToClose?.limitPrice ?? ''}
          />
          <TitleValue title="Est. Liq, price" value={239834} />
          <TitleValue title="unrealized Pnl" value={'47.4%'} />
        </Grid>
        {/* Form */}
        <Grid
          container
          size={12}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}>
          {/* Price Input */}
          <Grid size={12} container>
            <Grid size={9}>
              <TextField
                fullWidth
                label={'Price'}
                id="filled-amount-start-adornment"
                variant="filled"
                type="number"
                {...register('price')}
              />
            </Grid>
            <Grid
              size={3}
              px={3}
              sx={{
                color: theme.palette.text.secondary,
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.default,
              }}>
              <Center fullSize>Market</Center>
            </Grid>
          </Grid>
          {/* Amount Input */}
          <Grid size={12}>
            <TextField
              fullWidth
              label={'Amount'}
              id="filled-drawer-amount-start-adornment"
              name="amount"
              InputLabelProps={{
                shrink: getValues('amount') !== undefined,
              }}
              variant="filled"
              type="number"
              value={amountValue}
            />
            {/* Slider */}
            <Box
              sx={{
                width: '100%',
                px: 1,
              }}>
              <AmountSlider
                marks={[
                  {value: 0 * MAX},
                  {value: 0.25 * MAX},
                  {value: 0.5 * MAX},
                  {value: 0.75 * MAX},
                  {value: 1 * MAX},
                ]}
                max={MAX}
                min={0}
                value={amountValue}
                onChange={(e, v) => onAmountChange(v)}
              />
            </Box>
          </Grid>
          {/* Show Pnl */}
          <Grid container size={12}>
            <Grid>
              <Typography variant="body2" color={theme.palette.text.primary}>
                P&L
              </Typography>
            </Grid>
            <Grid offset={'auto'}>
              <Typography variant="body2" color={theme.palette.error.main}>
                234.234.22 USDT
              </Typography>
            </Grid>
          </Grid>
          {/* Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 2,
              borderRadius: theme.shape.borderRadius,
              py: 2,
            }}>
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

const TitleValue = ({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) => {
  //
  const theme = useTheme();
  //
  return (
    <Grid container size={12}>
      <Grid>
        <Typography variant="body2" color={theme.palette.text.secondary}>
          {title}
        </Typography>
      </Grid>
      <Grid offset={'auto'}>
        <Typography variant="body2" color={theme.palette.text.primary}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};
