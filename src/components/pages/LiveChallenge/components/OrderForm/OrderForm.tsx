/* eslint-disable max-lines */
import {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {Tpsl} from './components/Tpsl';

import {AmountSlider} from '@/components/molecules/AmountSlider';
import {TitleValue} from '@/components/molecules/TitleValue';
import {useDisclosure} from '@/hooks/custom/useDisclosure';
import {flex} from '@/utils/flexHelper';

export const OrderForm = () => {
  const max = 1000;
  const theme = useTheme();
  const [value, setValue] = useState<number | number[]>(250);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedOrderType, setSelectedOrderType] = useState<
    'StopLimit' | 'Market' | 'Limit'
  >('Limit');
  const {isOpen: isBuySellOpen, onToggle: onBuySellToggle} = useDisclosure();

  const handleBuySellBtnClick = () => {
    if (!isBuySellOpen) {
      onBuySellToggle();
    }
  };
  //
  return (
    <Grid
      container
      size={12}
      spacing={2}
      sx={{
        '.MuiInputBase-root': {
          height: '52px',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
        },
      }}>
      {isBuySellOpen && (
        <Grid size={12} container>
          <Grid offset={'auto'}>
            <IconButton onClick={onBuySellToggle}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
      <Grid
        container
        size={12}
        spacing={2}
        display={isBuySellOpen ? 'flex' : 'none'}>
        <Grid size={12}>
          <TextField fullWidth label={'Cross'} variant="filled" />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label={'Price'}
            id="filled-price-start-adornment"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">USDT</InputAdornment>
                ),
              },
            }}
            variant="filled"
            type="number"
          />
        </Grid>
        <Grid size={12}>
          {/* Input */}
          <TextField
            fullWidth
            label={'Amount'}
            id="filled-amount-start-adornment"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">BTC</InputAdornment>
                ),
              },
            }}
            InputLabelProps={{
              shrink: value !== undefined,
            }}
            variant="filled"
            type="number"
            value={value}
          />
          {/* Slider */}
          <Box
            sx={{
              width: '100%',
              px: 1,
            }}>
            <AmountSlider
              marks={[
                {value: 0 * max},
                {value: 0.25 * max},
                {value: 0.5 * max},
                {value: 0.75 * max},
                {value: 1 * max},
              ]}
              max={max}
              min={0}
              value={value as any}
              onChange={(e, v) => setValue(v)}
            />
          </Box>
          {/* Free Margin */}
          <TitleValue
            title={
              <Typography
                variant="caption"
                lineHeight={'16.37px'}
                color={theme.palette.text.secondary}>
                Free Margin
              </Typography>
            }
            value={
              <Typography
                variant="caption"
                lineHeight={'16.37px'}
                color={theme.palette.text.secondary}>
                1000 USDT
              </Typography>
            }
            containerSX={{
              ...flex().row().jbetween().abaseline().result,
              justifyContent: 'space-between',
              width: '100%',
              marginTop: theme.spacing(-1),
            }}
          />
        </Grid>
        <Grid
          size={12}
          sx={{
            marginTop: theme.spacing(-0.5),
          }}>
          <Tpsl />
        </Grid>
      </Grid>
      <Grid size={12} container>
        <Grid size={6}>
          <Button
            color="success"
            variant="contained"
            fullWidth
            onClick={handleBuySellBtnClick}
            sx={{
              borderRadius: '0.75rem',
              height: '44px',
              color: theme.palette.text.primary,
            }}>
            BUY / LONG
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            color="error"
            variant="contained"
            fullWidth
            onClick={handleBuySellBtnClick}
            sx={{
              borderRadius: '0.75rem',
              height: '44px',
            }}>
            SELL / SHORT
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
