import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type MoreItemProps = {
  navigateToDetail: () => void;
};

export const MoreItem: React.FC<MoreItemProps> = ({navigateToDetail}) => (
  <Grid>
    <Button sx={{padding: '0'}} onClick={navigateToDetail}>
      <Grid display="flex" alignItems="center">
        <Typography
          component="span"
          variant="caption"
          fontWeight="700"
          fontSize="10px"
          fontFamily="'Nunito Sans', sans-serif"
          lineHeight="10px"
          marginBottom="5px"
          color="text.white">
          MORE
        </Typography>
        <Grid>
          <KeyboardArrowRightIcon fontSize="small" />
        </Grid>
      </Grid>
    </Button>
  </Grid>
);
