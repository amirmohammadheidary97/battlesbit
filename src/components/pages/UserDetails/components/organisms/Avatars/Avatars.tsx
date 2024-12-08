import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import AvatarItem from '../../molecules/AvatarItem';

import type {UserAvatars} from '@/types/models/user';

type Props = {
  title: string;
  selectAvatar: number;
  avatars: UserAvatars[];
  setSelectAvatar: React.Dispatch<React.SetStateAction<number | undefined>>;
};
const Avatars: React.FC<Props> = ({
  title,
  avatars,
  setSelectAvatar,
  selectAvatar,
}) => {
  const theme = useTheme();

  const handleSetAvatarId = (id: number) => {
    setSelectAvatar(id);
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
      <Typography
        color={'test.white'}
        variant="caption"
        fontWeight={'400'}
        fontSize={'16px'}
        fontFamily="'Nunito Sans', sans-serif">
        {title}
      </Typography>
      <Grid container spacing={1} columns={{xs: 5, sm: 7, md: 8}}>
        {avatars.map(item => (
          <Grid size={1} key={item.id}>
            <AvatarItem
              selectAvatar={selectAvatar}
              handleSetAvatarId={handleSetAvatarId}
              {...item}
            />
          </Grid>
        ))}
        <Grid
          sx={{width: '100%'}}
          marginTop={'5px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Typography
            color={theme.palette.primary.main}
            variant="overline"
            fontWeight={'700'}
            fontSize={'10px'}
            fontFamily="'Nunito Sans', sans-serif">
            show all
          </Typography>
          <Typography
            color={theme.palette.primary.main}
            variant="overline"
            fontWeight={'700'}
            fontSize={'10px'}
            fontFamily="'Nunito Sans', sans-serif">
            <KeyboardArrowDownIcon fontSize="small" />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Avatars;
