import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {theme} from '@/config/theme';

export const SearchBarTemplate = () => (
  <>
    <Grid container spacing={2} size={12}>
      <Grid size="grow">
        <Skeleton
          variant="rectangular"
          height={40}
          sx={{
            borderRadius: theme.shape.borderRadius,
          }}
        />
      </Grid>
      <Grid size="auto">
        <Skeleton
          variant="rectangular"
          width={40}
          height={40}
          sx={{
            borderRadius: theme.shape.borderRadius,
          }}
        />
      </Grid>
    </Grid>
  </>
);
