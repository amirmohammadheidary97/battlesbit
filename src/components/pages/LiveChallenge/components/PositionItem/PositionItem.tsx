import {Box, Button, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {usePositionsState} from '../../state/positions.state';
import {gameMatchPositionFakeData} from '../ClosePositionDrawer/close-position-drawer.stories';

import {
  HistoryFirstRow,
  OpenOrderFirstRow,
  PositionFirstRow,
} from './components/FirstRow';
import {OpenPositionEndRow} from './components/OpenPositionEndRow/OpenPositionEndRow';
import {PositionChip} from './components/PositionChip';
import {PositionTitleValue} from './components/PositionTitleValue/PositionTitleValue';

import {CustomIcon} from '@/components/atoms/icon';
import {BasicTimeUnits} from '@/components/atoms/TimeSpent';
import {flex} from '@/utils/flexHelper';

type Props = {
  assetName: string;
  type: 'position' | 'history' | 'openOrder';
  chips: {
    side: 'buy' | 'sell';
    leverage: number;
    others: string[];
  };
  positionProps?: {
    unrealizedPnl: number | string;
    pnl: number | string;
  };
  openOrderProps?: {
    triggerPrice: number | string;
    price: number | string;
    openingTime: number;
  };
  historyProps?: {
    positionPnl: number | string;
    pnl: number | string;
  };
  otherProps: {title: string; value: number | string}[];
};

export const PositionItem = ({
  assetName,
  type,
  otherProps,
  chips,
  historyProps,
  openOrderProps,
  positionProps,
}: Props) => {
  //
  const theme = useTheme();
  const {setSelectedPositionToCancel} = usePositionsState();
  const handleCancelPosition = () => {
    setSelectedPositionToCancel(gameMatchPositionFakeData);
  };
  //
  return (
    <Grid
      container
      size={12}
      pb={2}
      spacing={1}
      borderBottom={'1px solid #fff'}>
      {/* Header */}
      <Grid size={12} container alignItems={'center'}>
        <Grid>
          <Typography variant="button" color={theme.palette.text.primary}>
            {assetName}
          </Typography>
        </Grid>
        <Grid offset={'auto'}>
          {type === 'history' && (
            <Box
              sx={{
                ...flex().gap(0.25).acenter().result,
              }}>
              <CustomIcon type="shareIcon" color="primary" />
              <Typography variant="body2" color={theme.palette.text.secondary}>
                Closed
              </Typography>
            </Box>
          )}
          {type === 'openOrder' && (
            <BasicTimeUnits time={openOrderProps?.openingTime as number} />
          )}
        </Grid>
      </Grid>
      {/* Chips */}
      <Grid size={12} container>
        <Grid size={'grow'} spacing={0.5} container>
          <Grid>
            <PositionChip value={chips.side} type="side" />
          </Grid>
          <Grid>
            <PositionChip value={chips.leverage} type="lvg" />
          </Grid>
          {chips?.others?.length &&
            chips?.others.map(chip => (
              <Grid key={chip}>
                <PositionChip type={'other'} value={chip} />
              </Grid>
            ))}
        </Grid>
        {/* Cancel button */}
        {type === 'openOrder' && (
          <Grid size={'auto'}>
            <Button
              variant="contained"
              size="small"
              color="grey1"
              onClick={handleCancelPosition}>
              Cancel
            </Button>
          </Grid>
        )}
      </Grid>
      {/* First Row */}
      <Grid size={12}>
        {type === 'history' && historyProps && (
          <HistoryFirstRow
            positionPnl={historyProps?.positionPnl}
            pnl={historyProps?.pnl}
          />
        )}
        {type === 'position' && positionProps && (
          <PositionFirstRow
            pnl={positionProps.pnl}
            unrealizedPnl={positionProps.unrealizedPnl}
          />
        )}
        {type === 'openOrder' && openOrderProps && (
          <OpenOrderFirstRow
            price={openOrderProps.price}
            triggerPrice={openOrderProps.triggerPrice}
          />
        )}
      </Grid>
      {/* Other Props */}
      <Grid size={12} container>
        {otherProps.map((p, idx) => (
          <Grid
            key={p.title}
            {...(idx % 2 !== 0
              ? {display: 'flex', justifyContent: 'flex-end'}
              : {})}
            size={6}>
            <PositionTitleValue
              title={p.title}
              type="other"
              value={p.value}
              alignItems={idx % 2 !== 0 ? 'flex-end' : 'flex-start'}
              valueVariant="overline"
            />
          </Grid>
        ))}
      </Grid>
      {/* Buttons */}
      {type === 'position' && <OpenPositionEndRow />}
    </Grid>
  );
};
