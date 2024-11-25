import {useLocation, useNavigate} from 'react-router';
import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import type {NewAvatarsType} from '@/types/models/store';

type Props = {
  size?: number;
  hieght?: string;
  imageHeight?: string;
  imageWidth?: string;
};
export const GetNewAvatarItem: React.FC<NewAvatarsType & Props> = ({
  id,
  amount,
  currency,
  iconUrl,
  size = 1,
  hieght = '50px',
  imageHeight = '50px',
  imageWidth = '50px',
}) => {
  const nav = useNavigate();
  const location = useLocation();
  return (
    <Grid
      sx={{
        height: hieght,
        padding: '0 8px',
      }}
      size={size}>
      <Box
        onClick={() =>
          nav(
            location.pathname +
              '?state=newavatar&value=' +
              id +
              '&type=NewAvatar',
          )
        }
        sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Grid container alignItems={'flex-end'} spacing={2}>
          <Grid
            sx={{
              height: imageHeight,
              width: imageWidth,
              img: {
                borderRadius: '100%',
                width: '100%',
                height: '100%',
              },
            }}>
            <img src={iconUrl} alt={currency} />
          </Grid>
        </Grid>
        <Grid display="flex" alignItems="center">
          <Typography
            component="span"
            display="flex"
            alignItems="center"
            fontFamily="'Nunito Sans', sans-serif"
            color={'text.white'}
            variant="caption"
            fontSize="12px"
            fontWeight="700">
            {amount}{' '}
            <Typography fontSize="12px" marginLeft="5px">
              {currency}
            </Typography>
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
};
