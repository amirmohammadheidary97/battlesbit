import {useState} from 'react';
import {Box, MenuItem, Select, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useAssetsState} from '../../state/assets.state';

import {AssetsDrawer} from './components/AssetsDrawer';
import {ChartComponent} from './components/ChartComponent';

import {CustomIcon} from '@/components/atoms/icon';
import type {Asset} from '@/gql-codegen/generated';
import {useDisclosure} from '@/hooks/custom/useDisclosure';
import {flex} from '@/utils/flexHelper';
import {numberWithCommas} from '@/utils/money-number-fromatter';

export type chartType = 'area' | 'candlestick';

export const AssetsChart = () => {
  const [chartType, setChartType] = useState<chartType>('area');
  const [prevoisChartType, setPrevoisChartType] = useState<
    chartType | undefined
  >(undefined);

  const [selectedAsset, setSelectedAsset] = useState<Asset>({
    id: 'btc',
    name: 'BTC',
    priceUSD: 65200,
  } as any);
  const {
    isOpen: isAssetsOpen,
    onClose: onAssetsClose,
    onOpen: onAssetsOpen,
  } = useDisclosure();
  const {assets} = useAssetsState();
  const handleSelectAsset = (asset: Asset) => {
    setSelectedAsset(asset);
  };

  return (
    <Grid
      container
      size={12}
      sx={{
        height: '35vh',
        'a[href="https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart&utm_source=localhost/iframe.html"]':
          {
            display: 'none',
          },
        'a[href="https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart&utm_source=localhost/live-challenge"]':
          {
            display: 'none',
          },
      }}>
      <Grid container size={12} sx={{height: '3.5rem'}} alignItems={'center'}>
        <Grid>
          <Box
            onClick={onAssetsOpen}
            sx={{
              ...flex().column().astretch().result,
              cursor: 'pointer',
            }}>
            <Box
              sx={{
                ...flex().row().acenter().jstart().result,
              }}>
              <Typography variant="caption">{selectedAsset?.name}</Typography>
              <CustomIcon
                type="arrow-up"
                sx={{transform: 'rotate(180deg)', fontSize: '1rem'}}
              />
            </Box>
            <Box>
              <Typography variant="caption" color="success.main">
                {selectedAsset?.priceUSD !== undefined
                  ? numberWithCommas(selectedAsset.priceUSD)
                  : ''}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          offset={'auto'}
          sx={{
            '*': {
              border: '0px !important',
              outline: 'none !important',
            },
          }}>
          <Select
            value={chartType}
            onChange={() => {
              setPrevoisChartType(chartType);
              setChartType(p => (p == 'area' ? 'candlestick' : 'area'));
            }}
            displayEmpty
            MenuProps={{
              disableScrollLock: true,
            }}>
            <MenuItem value={'candlestick'}>Candle</MenuItem>
            <MenuItem value={'area'}>Tick</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid size={12} sx={{height: 'calc(100% - 3.5rem)'}}>
        <ChartComponent
          chartType={chartType}
          prevoisChartType={prevoisChartType}
        />
      </Grid>
      {/* Drawer */}
      <AssetsDrawer
        assets={assets}
        handleSelect={handleSelectAsset}
        selectedAsset={selectedAsset}
        isOpen={isAssetsOpen}
        onClose={onAssetsClose}
        onOpen={onAssetsOpen}
      />
    </Grid>
  );
};
