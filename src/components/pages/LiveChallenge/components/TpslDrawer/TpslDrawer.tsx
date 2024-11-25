import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Drawer,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import { usePositionsState } from '../../state/positions.state';
import { getPositionChips } from '../../utils/getPositionChips';
import type { PositionChipProps } from '../PositionItem/components/PositionChip';
import { PositionChip } from '../PositionItem/components/PositionChip';

import { Center } from '@/components/atoms/Center';
import { ModalHeader } from '@/components/molecules/ModalHeader';

type Inputs = {
  tp: number;
  sl: number;
};

const TpslDrawer = () => {
  //
  const theme = useTheme();
  const { setSelectedPositionToEditTpsl, selectedPositionToEditTpsl } =
    usePositionsState();
  const open = Boolean(selectedPositionToEditTpsl);
  const onClose = () => setSelectedPositionToEditTpsl(undefined);

  const { register, handleSubmit } = useForm<Inputs>();

  const chips: PositionChipProps[] = selectedPositionToEditTpsl
    ? getPositionChips(selectedPositionToEditTpsl)
    : [];

  const onSubmit: SubmitHandler<Inputs> = values => {
    console.log(values);
  };
  //
  return (
    <Drawer
      open={open}
      anchor="bottom"
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          backgroundImage: 'none',
        },
        '.position-chip-other , .position-chip-lvg , .MuiInputBase-root': {
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
      {' '}
      <Grid container size={12} spacing={1} p={2}>
        {/* Header */}
        <ModalHeader
          onClose={onClose}
          title="TP/SL"
          containerProps={{ sx: { p: 0 } }}
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
            value={selectedPositionToEditTpsl?.entryPrice ?? ''}
          />
          <TitleValue
            title="mark Price"
            value={selectedPositionToEditTpsl?.limitPrice ?? ''}
          />
          <TitleValue title="Est. Liq, price" value={239834} />
        </Grid>
        {/* Form */}
        <Grid
          container
          size={12}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}>
          {/* TP Input */}
          <Grid size={12} container>
            <Grid size={9}>
              <TextField
                fullWidth
                label={'TP trigger price'}
                id="filled-tp-start-adornment"
                variant="filled"
                type="number"
                {...register('tp')}
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
              <Center fullSize>Profit</Center>
            </Grid>
          </Grid>
          {/* SL Input */}
          <Grid size={12} container>
            <Grid size={9}>
              <TextField
                fullWidth
                label={'SL trigger price'}
                id="filled-sl-start-adornment"
                variant="filled"
                type="number"
                {...register('sl')}
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
              <Center fullSize>Loss</Center>
            </Grid>
          </Grid>
          {/* description */}
          <Grid size={12}>
            <Typography variant="body2" color={theme.palette.text.primary}>
              When Last Price reaches 400, it will trigger Limit Order, and the
              estimated Pnl is
              <Box
                component={'span'}
                mx={0.25}
                color={theme.palette.success.main}>
                +8.85
              </Box>
              USDT.
            </Typography>
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
            Apply
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default TpslDrawer;

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
