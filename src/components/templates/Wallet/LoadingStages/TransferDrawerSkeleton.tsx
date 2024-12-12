import {Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import InfoSkeleton from './InfoSkeleton';

import FullPageDrawerContainer from '@/components/pages/Wallet/components/organism/DrawerContainer';
import {flex} from '@/utils/flexHelper';

const TransferDrawerSkeleton = ({
  isTransferOpen,
}: {
  isTransferOpen: boolean;
}) => (
  <FullPageDrawerContainer isOpen={isTransferOpen} PageTitle="Withdraw">
    <Grid
      container
      size={12}
      spacing="1rem"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'calc(100vh - 38px)',
        px: '1rem',
        pb: '38px',
        pt: '12px',
      }}>
      {/* Top Section */}
      <Grid container size={12}>
        {/* Description */}
        <Grid size={12}>
          <Typography variant="body2" fontFamily="Nunito Sans">
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="90%" height="1rem" />
          </Typography>
        </Grid>

        {/* Wallet Address */}
        <Grid
          size={12}
          sx={{
            mt: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}>
          <Typography variant="caption" fontFamily="Nunito Sans">
            <Skeleton width="40%" height="0.8rem" />
          </Typography>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="52px"
            sx={{borderRadius: theme => theme.shape.borderRadius}}
          />
        </Grid>

        {/* USD Input */}
        <Grid size={12} sx={{...flex().column().gap('4px').result}}>
          <Typography variant="caption" fontFamily="Nunito Sans">
            <Skeleton width="60%" height="0.8rem" />
          </Typography>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="52px"
            sx={{borderRadius: theme => theme.shape.borderRadius}}
          />
          <Typography variant="caption" sx={{px: '1rem'}}>
            <Skeleton width={100} />
          </Typography>
        </Grid>

        {/* Warning Tips */}
        <Grid size={12} sx={{mt: '12px'}}>
          <InfoSkeleton />
          <InfoSkeleton />
        </Grid>
      </Grid>

      {/* Bottom Section: Button */}
      <Grid size={12} sx={{mt: '1rem'}}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="48px"
          sx={{borderRadius: theme => theme.shape.borderRadius}}
        />
      </Grid>
    </Grid>
  </FullPageDrawerContainer>
);

export default TransferDrawerSkeleton;
