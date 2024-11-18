import {Box, styled, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {GetNewAvatarItem} from '../../molecules/GetNewAvatarItem';
import {MoreItem} from '../../molecules/MoreItem/MoreItem';

import type {NewAvatarsType} from '@/types/models/store';

type GetNewAvatarsProps = {
  title: string;
  description: string;
  getNewAvatars: NewAvatarsType[];
};

const GetNewAvatarsWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '5px',
  width: '100%',
  height: '100%',
}));

export const GetNewAvatars: React.FC<GetNewAvatarsProps> = ({
  description,
  getNewAvatars,
  title,
}) => (
  <GetNewAvatarsWrapper>
    <Grid display="flex" alignItems="start" justifyContent="space-between">
      <Grid display="flex" padding="2px" flexDirection="column">
        <Typography
          component="p"
          variant="caption"
          marginBottom="10px"
          fontSize="16px"
          fontFamily="'Nunito Sans', sans-serif"
          lineHeight="10px"
          color="text.white">
          {title}
        </Typography>
        <Typography
          component="span"
          variant="caption"
          fontWeight="400"
          fontSize="12px"
          lineHeight="15px"
          fontFamily="'Nunito Sans', sans-serif"
          color="text.secondary">
          {description}
        </Typography>
      </Grid>
      <Grid>
        <MoreItem navigateToDetail={() => {}} />
      </Grid>
    </Grid>
    <Grid container marginTop="8px" spacing={2} columns={6}>
      {getNewAvatars.map((item, index) => (
        <GetNewAvatarItem key={index} {...item} />
      ))}
    </Grid>
  </GetNewAvatarsWrapper>
);
