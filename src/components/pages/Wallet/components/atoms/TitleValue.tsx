import type {BoxProps} from '@mui/material';
import {Box, Typography} from '@mui/material';

const TitleValue = ({
  containerProps,
  title,
  desc,
}: {
  containerProps?: BoxProps;
  title: string;
  desc: string;
}) => (
  <Box
    {...containerProps}
    sx={{
      fontFamily: 'Nunito Sans',
      textAlign: 'center',
    }}>
    <Typography fontSize={'1.125rem'} variant="h6">
      {title}
    </Typography>
    <Typography color="text.secondary" variant="caption">
      {desc}
    </Typography>
  </Box>
);

export default TitleValue;
