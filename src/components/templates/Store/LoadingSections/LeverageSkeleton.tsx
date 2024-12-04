import {Grid2} from '@mui/material';

import LeverageItemSkeleton from './LeverageItemSkeleton';

const LeverageSkeleton = () => (
  <Grid2 container rowSpacing={1} mb={3} mt={3} columnSpacing={1}>
    {[...Array(6)].map((_, index) => (
      <LeverageItemSkeleton key={index} />
    ))}
  </Grid2>
);

export default LeverageSkeleton;
