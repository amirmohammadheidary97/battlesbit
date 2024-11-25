import {Box, LinearProgress, Typography} from '@mui/material';

import {flex} from '@/utils/flexHelper';

type Props = {
  total: number;
  progress: number;
  linearHeight: string;
};
const CustomLinearProgress = ({progress, total, linearHeight}: Props) => (
  <Box sx={{...flex().jcenter().wrap().gap('4px').result}} width={1}>
    <LinearProgress
      variant="determinate"
      value={(progress / total) * 100}
      color="primary"
      sx={{
        height: linearHeight,
        width: 1,
        borderRadius: theme => theme.shape.borderRadius,
        bgcolor: 'background.paper',
        border: theme => `0.5px solid ${theme.palette.primary.main}`,
        '& .MuiLinearProgress-bar': {
          backgroundColor: theme => theme.palette.primary.main,
        },
      }}
    />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: 1,
      }}>
      <Typography
        variant="overline"
        fontFamily={'Nunito Sans'}
        fontSize={'10px'}
        fontWeight={'700'}
        lineHeight={'11px'}>
        {progress}
      </Typography>
      <Typography
        variant="overline"
        fontFamily={'Nunito Sans'}
        fontSize={'10px'}
        fontWeight={'700'}
        lineHeight={'11px'}>
        {total}
      </Typography>
    </Box>
  </Box>
);

export default CustomLinearProgress;
