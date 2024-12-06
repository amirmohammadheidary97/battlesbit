import {Grid2} from '@mui/material';

import PackagesItemSkeleton from './PackagesItemSkeleton';

const PackagesSkeleton = () => (
  <Grid2 container rowSpacing={1} mb={3} mt={3} columnSpacing={1}>
    {[...Array(2)].map((_, index) => (
      <PackagesItemSkeleton key={index} />
    ))}
  </Grid2>
);

export default PackagesSkeleton;
