/* eslint-disable max-lines */
import {useState} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import type {SelectChangeEvent} from '@mui/material';
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

import {LeverageDrawer} from '../LeverageDrawer';

import {Tpsl} from './components/Tpsl';

import {Center} from '@/components/atoms/Center';
import {AmountSlider} from '@/components/molecules/AmountSlider';
import {SelectControl} from '@/components/molecules/SelectControl';
import {TitleValue} from '@/components/molecules/TitleValue';
import {useDisclosure} from '@/hooks/custom/useDisclosure';
import type {marginType, orderType} from '@/types/common';
import {flex} from '@/utils/flexHelper';

const orderTypes: orderType[] = ['limit', 'market', 'stoplimit'];
const marginTypes: marginType[] = ['cross', 'isolate'];
const amountTypes: string[] = ['BTC', 'USDT'];

export const OrderForm = () => {
  const max = 1000;
  const theme = useTheme();
  const [value, setValue] = useState<number | number[]>(250);

  const {isOpen: isBuySellOpen, onToggle: onBuySellToggle} = useDisclosure();

  const {
    isOpen: isLeverageDrawerOpen,
    onClose: onLeverageDrawerClose,
    onOpen: onLeverageDrawerOpen,
  } = useDisclosure();
  const [leverage, setLeverage] = useState<number>(1);

  const [selectedOrderType, setSelectedOrderType] =
    useState<orderType>('limit');
  const handleOrderTypeChange = (event: SelectChangeEvent) => {
    setSelectedOrderType(event.target.value as orderType);
  };

  const [selectedAmountType, setSelectedAmountType] = useState<string>('USDT');
  const handleAmountTypeChange = (event: SelectChangeEvent) => {
    setSelectedAmountType(event.target.value as string);
  };

  const [selectedMarginType, setSelectedMarginType] =
    useState<marginType>('isolate');
  const handleMarginTypeChange = (event: SelectChangeEvent) => {
    setSelectedMarginType(event.target.value as marginType);
  };

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
        <Grid size={12} container spacing={1} alignItems={'stretch'}>
          <Grid>
            <SelectControl
              selectedOption={{
                name: selectedMarginType,
                value: selectedMarginType,
              }}
              options={marginTypes.map(ot => ({name: ot, value: ot}))}
              onChange={handleMarginTypeChange}
              getValue={op => op.value}
              getLabel={op => op.name}
              slotProps={miniSelectSlotProps}
            />
          </Grid>
          <Grid>
            <Box
              onClick={onLeverageDrawerOpen}
              sx={{
                ...flex().row().acenter().result,
                borderRadius: '0.2rem',
                height: 1,
                backgroundColor: theme.palette.background.paper,
                cursor: 'pointer',
                py: 0,
                px: 0.5,
              }}>
              <Typography variant="overline">{`${leverage} X`}</Typography>
              <ArrowDropDownIcon />
            </Box>
          </Grid>
        </Grid>
        <Grid size={12}>
          <SelectControl
            label="Order Type"
            selectedOption={{
              name: selectedOrderType,
              value: selectedOrderType,
            }}
            options={orderTypes.map(ot => ({name: ot, value: ot}))}
            onChange={handleOrderTypeChange}
            getValue={op => op.value}
            getLabel={op => op.name}
            slotProps={{formControlProps: {fullWidth: true}}}
          />
        </Grid>
        <Grid container size={12}>
          <Grid
            sx={{position: 'relative'}}
            size={selectedOrderType === 'stoplimit' ? 6 : 12}>
            <TextField
              fullWidth
              label={selectedOrderType === 'market' ? '' : 'Price'}
              id="filled-price-start-adornment"
              disabled={selectedOrderType === 'market'}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      {selectedOrderType === 'market' ? '' : 'USDT'}
                    </InputAdornment>
                  ),
                },
              }}
              variant="filled"
              type="number"
            />
            {selectedOrderType === 'market' && (
              <Center
                fullSize
                containerProps={{
                  sx: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  },
                }}>
                Market Price
              </Center>
            )}
          </Grid>
          {selectedOrderType === 'stoplimit' && (
            <Grid size={6}>
              <TextField
                fullWidth
                label={'Limit'}
                id="filled-limit-start-adornment"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">{'USDT'}</InputAdornment>
                    ),
                  },
                }}
                variant="filled"
                type="number"
              />
            </Grid>
          )}
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
                  <InputAdornment
                    position="end"
                    sx={{
                      'div.MuiInputBase-root.MuiFilledInput-root': {
                        backgroundColor: 'transparent',
                      },
                    }}>
                    <SelectControl
                      selectedOption={{
                        name: selectedAmountType,
                        value: selectedAmountType,
                      }}
                      options={amountTypes.map(ot => ({name: ot, value: ot}))}
                      onChange={handleAmountTypeChange}
                      getValue={op => op.value}
                      getLabel={op => op.name}
                      slotProps={miniSelectSlotProps}
                    />
                  </InputAdornment>
                ),
              },
            }}
            InputLabelProps={{
              shrink: value !== undefined,
            }}
            variant="filled"
            type="number"
            value={(value as number) * leverage}
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
      {/* Drawers */}
      <LeverageDrawer
        open={isLeverageDrawerOpen}
        onClose={onLeverageDrawerClose}
        leverage={leverage}
        setLeverage={setLeverage}
      />
    </Grid>
  );
};
const miniSelectSlotProps = {
  formControlProps: {
    sx: {
      '.MuiInputBase-root': {
        height: 'unset',
        borderRadius: '0.2rem',
      },
      '.MuiSelect-select': {
        paddingTop: '0.125rem',
        paddingBottom: '0.125rem',
        paddingRight: '1.5rem !important',
        fontSize: '10px',
        fontWeight: '700',
      },
      '.MuiList-root': {
        '.MuiButtonBase-root': {
          fontSize: '10px',
        },
      },
      '.MuiSvgIcon-root': {
        right: '0px',
      },
    },
  },
  selectProps: {
    MenuProps: {
      MenuListProps: {
        sx: {
          py: 0,
          li: {
            padding: 0.5,
            fontSize: '10px',
            lineHeight: '11px',
            minHeight: 'unset !important',
            height: '2rem !important',
          },
        },
      },
    },
  },
};
