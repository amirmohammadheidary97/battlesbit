import {Box, Button, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {CustomIcon} from '@/components/atoms/icon';
import {flex} from '@/utils/flexHelper';

export const AiAssistantCard = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={1.5}
      size={12}
      sx={{
        paddingY: 2,
        paddingX: 2.5,
        bgcolor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
      }}>
      <Grid size={'grow'}>
        <Box
          sx={{
            padding: '0.5rem',
            borderRadius: '0.75rem',
            border: `1px solid ${theme.palette.divider}`,
            background: 'rgba(24, 26, 32, 0.60)',
            width: '100%',
            height: '2.25rem',
            ...flex().acenter().jstart().result,
          }}>
          <Typography
            variant="caption"
            lineHeight={'normal'}
            textAlign={'center'}>
            Your Ai assistant here to help!
          </Typography>
        </Box>
      </Grid>
      <Grid size={'auto'}>
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          sx={{
            borderRadius: 3,
            borderWidth: '2px',
            fontWeight: '600',
            height: '2.25rem',
          }}
          startIcon={<CustomIcon type="IconAI" />}>
          Ask Me
        </Button>
      </Grid>
    </Grid>
  );
};
