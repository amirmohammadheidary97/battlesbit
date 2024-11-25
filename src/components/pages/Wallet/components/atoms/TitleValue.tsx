import type {BoxProps} from '@mui/material';
import {Box, Typography} from '@mui/material';

type Props = {
  containerProps?: BoxProps;
  title: string;
  desc: string;
};
const TitleValue = ({containerProps, title, desc}: Props) => (
  <Box
    {...containerProps}
    sx={{
      fontFamily: 'Nunito Sans',
      textAlign: 'center',
    }}>
    <Typography variant="h6">{title}</Typography>
    <Typography color="text.secondary" variant="caption">
      {desc}
    </Typography>
  </Box>
);

export default TitleValue;
