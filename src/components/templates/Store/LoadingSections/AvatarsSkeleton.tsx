import {Grid2} from '@mui/material';

import AvatarItem from './AvatarItem';

const AvatarsSkeleton = () => (
  <Grid2 container marginTop="8px" spacing={2} columns={6}>
    {[...Array(6)].map((_, index) => (
      <AvatarItem key={index} />
    ))}
  </Grid2>
);

export default AvatarsSkeleton;
