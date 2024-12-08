import {Button, List, Skeleton, Typography} from '@mui/material';
import type {Grid2Props} from '@mui/material/Grid2';
import Grid from '@mui/material/Grid2';

import TransactionItemSkeleton from './ListItemSkeleton';

type Props = {
  isTransaction: boolean;
  height?: string;
  containerProps?: Grid2Props;
};

const ScrollableListSkeleton = ({
  isTransaction,
  //   title,
  height,
  containerProps,
}: Props) => (
  <Grid
    container
    sx={{
      borderTopRightRadius: '24px',
      borderTopLeftRadius: '24px',
      maxHeight: height ?? 'calc(50vh - 83px)',
      overflowY: 'auto',
      position: 'relative',
      zIndex: 2,
    }}
    {...containerProps}
    size={12}>
    {/* Title */}
    <Grid
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 2,
        height: '18%',
        bgcolor: !isTransaction ? 'background.paper' : 'background.default',
      }}
      size={12}>
      <Typography variant="h6" sx={{font: '600 18px Nunito sans', p: '1rem'}}>
        <Skeleton width="40%" />
      </Typography>
    </Grid>

    {/* List Content */}
    <Grid height="82%" overflow="auto" size={12}>
      <List sx={{p: '8px'}}>
        {[...Array(5)].map((_, index) => (
          //   <Grid
          //     container
          //     key={index}
          //     sx={{
          //       py: 2,
          //       borderBottom: theme => `1px solid ${theme.palette.divider}`,
          //       alignItems: 'center',
          //     }}>
          //     {/* Skeleton for Transaction Items */}
          //     {isTransaction ? (
          //       <>
          //         <Skeleton variant="rectangular" width="30%" height="1.5rem" />
          //         <Skeleton variant="text" width="20%" sx={{ml: 2}} />
          //         <Skeleton variant="text" width="30%" sx={{ml: 2}} />
          //       </>
          //     ) : (
          //       // Skeleton for Network Items
          //       <Skeleton variant="rectangular" width="80%" height="2rem" />
          //     )}
          //   </Grid>
          <TransactionItemSkeleton key={index} />
        ))}

        {/* Confirm Button Skeleton */}
        {!isTransaction && (
          <Button
            sx={{
              width: 1,
              py: '1rem',
              borderRadius: theme => theme.shape.borderRadius,
              mt: 3,
            }}
            variant="contained"
            disabled>
            <Skeleton width="40%" />
          </Button>
        )}
      </List>
    </Grid>
  </Grid>
);

export default ScrollableListSkeleton;
