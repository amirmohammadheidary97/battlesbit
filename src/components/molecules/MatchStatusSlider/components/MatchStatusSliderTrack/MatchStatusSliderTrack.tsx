import {Box, useTheme} from '@mui/material';

export const MatchStatusSliderTrack = ({scale}: {scale: number}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, rgba(255,30,56,1) 0%, rgba(14,203,129,1) 50%);`,
        width: '100%',
        height: `${1 * scale}rem`,
        borderRadius: '1rem',
        border: `1px solid ${theme.palette.primary.main}`,
        transition: 'all 0.2s',
      }}></Box>
  );
};
