import {Button, Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import DepositItemSkeleton from './DepositItemSkeleton';

import FullPageDrawerContainer from '@/components/pages/Wallet/components/organism/DrawerContainer';

const DepositDrawerSkeleton = ({isDepositopen}: {isDepositopen: boolean}) => (
  <FullPageDrawerContainer isOpen={isDepositopen} PageTitle="Deposit">
    <Grid
      container
      p="1rem"
      height="calc(100vh - 40px)"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      size={12}>
      {/* Header */}
      <Grid pb="8px" size={12}>
        <Typography variant="subtitle1">
          <Skeleton width="60%" />
        </Typography>
      </Grid>

      {/* Skeleton for Deposit Items */}
      <Grid container rowSpacing="1rem" spacing="1rem" size={12}>
        {[1, 2].map(index => (
          <DepositItemSkeleton key={index} />
        ))}
      </Grid>

      {/* Button */}
      <Grid size={12} container pb="24px" flexGrow={1}>
        <Grid alignSelf="flex-end" size={12}>
          <Button
            disabled
            sx={{
              width: 1,
              py: '1rem',
              borderRadius: theme => theme.shape.borderRadius,
            }}
            variant="contained">
            <Skeleton width="100%" height="1.5rem" />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </FullPageDrawerContainer>
);

export default DepositDrawerSkeleton;
