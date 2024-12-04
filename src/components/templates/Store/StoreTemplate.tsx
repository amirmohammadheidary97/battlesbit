import {Box, Grid2} from '@mui/material';

import {
  AvatarsSkeleton,
  ChangeWalletSkeleton,
  HeaderSkeleton,
  LeverageSkeleton,
  TitleSectionSkeleton,
} from './LoadingSections';

export const StoreTemplate = () => (
  <Grid2
    spacing={1.75}
    container
    sx={{
      p: 2,
    }}>
    <Box>
      {/* Header */}
      <HeaderSkeleton />
      {/* Charge Wallet Section */}
      <Grid2
        sx={{
          backgroundColor: '#25272F',
          borderRadius: '10px',
          height: '180px',
          position: 'relative',
          padding: '10px',
          marginTop: '30px',
        }}
        size={12}>
        <TitleSectionSkeleton />
        <ChangeWalletSkeleton />
      </Grid2>

      {/* Leverage Section */}
      <Grid2 mt={2}>
        <TitleSectionSkeleton />
        <LeverageSkeleton />
      </Grid2>

      {/* Get New Avatars Section */}
      <Grid2 mt={5}>
        <TitleSectionSkeleton />
        <AvatarsSkeleton />
      </Grid2>
    </Box>
  </Grid2>
);
