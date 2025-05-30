/* eslint-disable max-lines */
import {useCallback, useRef, useState} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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

import {LeverageDrawer} from '../LeverageDrawer';
import {SelectMarginTypeDrawer} from '../SelectMarginTypeDrawer';
import {SelectOrderTypeDrawer} from '../SelectOrderTypeDrawer';

import {AmountInput} from './components/AmountInput';
import {ShowMargin} from './components/ShowMargin';
import {Tpsl} from './components/Tpsl';
import {useConnectedValues} from './hooks/useFormConnectedValues';

import {Center} from '@/components/atoms/Center';
import {AmountSlider} from '@/components/molecules/AmountSlider';
import {useDisclosure} from '@/hooks/custom/useDisclosure';
import type {marginType, orderType} from '@/types/common';
import {flex} from '@/utils/flexHelper';
import {numberWithCommas} from '@/utils/money-number-fromatter.ts';

export type amountMode = 'percent' | 'value';
export type TPSL = {
  enabled: boolean;
  tp?: {
    price?: number;
    profit?: number;
  };
  sl?: {
    price?: number;
    loss?: number;
  };
};
const orderTypes: orderType[] = ['limit', 'market', 'stoplimit'];
const availableMargin = 1250;
const marketPrice = 50000;

export const OrderForm = () => {
  const theme = useTheme();
  const leverageInputRef: any = useRef(null);
  const {
    leverage,
    setLeverage,
    sliderValue,
    setSliderValue,
    defferedProfit,
    usedMargin,
    amountValue,
    setAmountValue,
    resetAmount,
  } = useConnectedValues({availableMargin});
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [limit, setLimit] = useState<number | undefined>(undefined);
  const [tpsl, setTpsl] = useState<TPSL>({
    enabled: false,
  });
  const [selectedAmountType, setSelectedAmountType] = useState<string>('USDT');
  const [amountMode, setAmountMode] = useState<amountMode>('percent');
  const [selectedOrderType, setSelectedOrderType] =
    useState<orderType>('limit');
  const [selectedMarginType, setSelectedMarginType] =
    useState<marginType>('isolate');
  const {isOpen: isBuySellOpen, onToggle: onBuySellToggle} = useDisclosure();
  const {
    isOpen: isLeverageDrawerOpen,
    onClose: onLeverageDrawerClose,
    onOpen: onLeverageDrawerOpen,
  } = useDisclosure();
  const {
    isOpen: isOrderTypeDrawerOpen,
    onClose: onOrderTypeDrawerClose,
    onOpen: onOrderTypeDrawerOpen,
  } = useDisclosure();
  const {
    isOpen: isMarginTypeDrawerOpen,
    onClose: onMarginTypeDrawerClose,
    onOpen: onMarginTypeDrawerOpen,
  } = useDisclosure();
  //
  const handleOrderTypeChange = useCallback((value: orderType) => {
    setSelectedOrderType(value);
    if (value === 'market') {
      setPrice(undefined);
    }
    if (value !== 'stoplimit') {
      setLimit(undefined);
    }
  }, []);
  const handleMarginTypeChange = (e: marginType) => setSelectedMarginType(e);

  const handleBuySellBtnClick = () => {
    if (!isBuySellOpen) onBuySellToggle();
  };
  const handleSliderValueChange = (e: any, v: any) => {
    if (amountMode !== 'percent') setAmountMode('percent');
    setSliderValue(v);
    // ** immidiately change amount
    setAmountValue(String((v / 100) * availableMargin * leverage));
  };
  const onLeverageChange = (v: number) => {
    setLeverage(v);
    // ** immidiately change amount
    setAmountValue(String((sliderValue / 100) * availableMargin * v));
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
            <IconButton
              onClick={onBuySellToggle}
              sx={{
                svg: {
                  color: 'text.primary',
                },
              }}>
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
            <Box
              onClick={onMarginTypeDrawerOpen}
              sx={{
                ...flex().row().acenter().result,
                borderRadius: '0.2rem',
                height: 1,
                backgroundColor: theme.palette.background.paper,
                cursor: 'pointer',
                py: 0,
                px: 0.5,
              }}>
              <Typography variant="overline">{selectedMarginType}</Typography>
              <ArrowDropDownIcon />
            </Box>
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
          <Box
            onClick={onOrderTypeDrawerOpen}
            sx={{
              ...flex().row().jbetween().acenter().result,
              borderRadius: theme.shape.borderRadius,
              height: '52px',
              backgroundColor: theme.palette.background.paper,
              cursor: 'pointer',
              py: 0,
              px: 2,
            }}>
            <Typography variant="overline">{`${selectedOrderType}`}</Typography>
            <ArrowDropDownIcon />
          </Box>
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
              value={price}
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
                value={limit}
              />
            </Grid>
          )}
        </Grid>
        <Grid size={12}>
          {/* Input */}
          <AmountInput
            amountValue={amountValue}
            setAmountValue={setAmountValue}
            amountMode={amountMode}
            availableMargin={availableMargin}
            selectedAmountType={selectedAmountType}
            setSelectedAmountType={setSelectedAmountType}
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
            setAmountMode={setAmountMode}
            leverage={leverage}
            usedMargin={usedMargin}
            resetAmount={resetAmount}
          />
          {/* Slider */}
          <Box
            sx={{
              width: '100%',
              px: 1,
            }}>
            <AmountSlider
              marks={[
                {value: 0 * 100},
                {value: 0.25 * 100},
                {value: 0.5 * 100},
                {value: 0.75 * 100},
                {value: 1 * 100},
              ]}
              max={100}
              min={0}
              step={0.01}
              value={sliderValue as any}
              onChange={handleSliderValueChange}
            />
          </Box>
          {/* margins */}
          <ShowMargin
            availableMargin={availableMargin}
            usedMargin={usedMargin}
          />
        </Grid>
        {/* TPSL */}
        <Grid
          size={12}
          sx={{
            marginTop: theme.spacing(-0.5),
          }}>
          <Tpsl
            {...tpsl}
            basePrice={
              selectedOrderType === 'market' ? marketPrice : (price ?? 0)
            }
            setTpsl={setTpsl}
          />
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
              ...flex().column().acenter().result,
            }}>
            <Typography
              variant={'button'}
              sx={{
                color: 'inherit',
              }}>
              BUY / LONG
            </Typography>
            {isBuySellOpen && (
              <Typography
                variant={'caption'}
                sx={{
                  color: 'inherit',
                }}>
                {numberWithCommas(defferedProfit)}
              </Typography>
            )}
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
              ...flex().column().acenter().result,
            }}>
            <Typography
              variant={'button'}
              sx={{
                color: 'inherit',
              }}>
              SELL / SHORT
            </Typography>
            {isBuySellOpen && (
              <Typography
                variant={'caption'}
                sx={{
                  color: 'inherit',
                }}>
                {numberWithCommas(defferedProfit)}
              </Typography>
            )}
          </Button>
        </Grid>
      </Grid>
      {/* Drawers */}
      <LeverageDrawer
        ref={leverageInputRef}
        open={isLeverageDrawerOpen}
        onClose={onLeverageDrawerClose}
        onConfirm={onLeverageChange}
      />
      <SelectOrderTypeDrawer
        handleOrderTypeChange={handleOrderTypeChange}
        onClose={onOrderTypeDrawerClose}
        open={isOrderTypeDrawerOpen}
        orderTypes={orderTypes}
      />
      <SelectMarginTypeDrawer
        handleSelect={handleMarginTypeChange}
        onClose={onMarginTypeDrawerClose}
        open={isMarginTypeDrawerOpen}
      />
    </Grid>
  );
};
