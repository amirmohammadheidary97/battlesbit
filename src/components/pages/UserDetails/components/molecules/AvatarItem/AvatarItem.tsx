import Grid from '@mui/material/Grid2';

import ChekedImg from '@/assets/img/icons/general/checked.png';
import type {UserAvatars} from '@/types/models/user';

const AvatarItem: React.FC<
  UserAvatars & {handleSetAvatarId: (id: number) => void; selectAvatar: number}
> = ({id, image, handleSetAvatarId, selectAvatar}) => (
  <Grid
    onClick={() => handleSetAvatarId(id)}
    component={'div'}
    position={'relative'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'end'}
    sx={{
      height: '65px',
      width: '65px',
      padding: '1px',
      borderRadius: '10px',
      border: selectAvatar === id ? '2px solid rgba(243, 199, 59, 1)' : 'none',
      img: {
        borderRadius: '10px',
        width: '100%',
        height: '100%',
      },
    }}>
    {selectAvatar === id && (
      <Grid
        onClick={() => handleSetAvatarId(id)}
        component={'div'}
        position={'absolute'}
        marginBottom={'5px'}
        sx={{
          height: '14px',
          width: '14px',
          padding: '1px',
          img: {
            width: '100%',
            height: '100%',
          },
        }}>
        <img src={ChekedImg} alt={id.toString()} />
      </Grid>
    )}
    <img src={image} alt={id.toString()} />
  </Grid>
);

export default AvatarItem;
