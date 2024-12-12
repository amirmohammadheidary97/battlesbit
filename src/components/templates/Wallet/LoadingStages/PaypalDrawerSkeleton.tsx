import {Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import FullPageDrawerContainer from '@/components/pages/Wallet/components/organism/DrawerContainer';
import {flex} from '@/utils/flexHelper';

const PaypalDrawerSkeleton = ({isOpen}: {isOpen: boolean}) => (
  <FullPageDrawerContainer isOpen={isOpen} PageTitle="Buy">
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
      {/* Top Section: SelectionComponent */}
      <Grid container size={12}>
        <Grid size={12}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="56px"
            sx={{borderRadius: theme => theme.shape.borderRadius}}
          />
        </Grid>

        {/* UsdInput */}
        <Grid size={12} sx={{...flex().column().gap('4px').result}}>
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

        {/* Description & Warning Tips */}
        <Grid pt="12px" size={12}>
          <Typography variant="body2">
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="90%" height="1rem" sx={{mt: '4px'}} />
            <Skeleton width="80%" height="1rem" sx={{mt: '4px'}} />
          </Typography>
          <Skeleton width="100%" height="1rem" sx={{mt: '12px'}} />
          <Skeleton width="90%" height="1rem" sx={{mt: '4px'}} />
          <Skeleton width="100%" height="1rem" sx={{mt: '12px'}} />
          <Skeleton width="90%" height="1rem" sx={{mt: '4px'}} />
        </Grid>
      </Grid>

      {/* Bottom Section: Button */}
      <Grid size={12}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="48px"
          sx={{borderRadius: 1}}
        />
      </Grid>
    </Grid>
  </FullPageDrawerContainer>
);

export default PaypalDrawerSkeleton;
