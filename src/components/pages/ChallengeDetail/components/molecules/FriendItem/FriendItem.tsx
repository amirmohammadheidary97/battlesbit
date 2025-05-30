import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import CustomButton from '@/components/atoms/Button';

type FriendItemProps = {
  id: number;
  name: string;
  isOnline: boolean;
  selectedId: number;
  setSelectedId: (id: number) => void;
};

const FriendItem = ({
  id,
  name,
  isOnline,
  selectedId,
  setSelectedId,
}: FriendItemProps) => (
  <Grid
    container
    display={'flex'}
    justifyContent={'space-between'}
    alignItems={'center'}
    sx={{
      borderBottom: '1px solid #595959',
      borderRadius: '0px',
      pb: '12px',
    }}
    size={12}>
    <Grid display={'flex'} alignItems={'center'} gap={1}>
      <Grid
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          height: '32px',
          width: '32px',
          backgroundColor: '#BDBDBD',
          borderRadius: '50%',
        }}>
        <Typography
          fontSize={20}
          fontWeight={400}
          fontFamily={'Geogrotesque Wide'}
          color={'#FFFFFF'}>
          {name[0]}
        </Typography>
      </Grid>
      <Grid display={'flex'} flexDirection={'column'}>
        <Typography
          fontSize={16}
          fontWeight={500}
          fontFamily={'Geogrotesque Wide'}
          color={'white'}>
          {name}
        </Typography>
        <Typography
          fontSize="12px"
          fontWeight={500}
          fontFamily="Geogrotesque Wide"
          lineHeight="100%"
          letterSpacing="0.048px"
          color={isOnline ? 'success.main' : 'error.main'}>
          {isOnline ? 'online' : 'Offline'}
        </Typography>
      </Grid>
    </Grid>
    <Grid display={'flex'} alignItems={'center'} gap={1}>
      <CustomButton
        variant={selectedId === id ? 'outlined' : 'contained'}
        color={selectedId === id ? 'background.paper' : 'text.primary'}
        textColor={selectedId === id ? '#B6B6B6' : 'black'}
        backgroundColor={
          selectedId === id ? 'background.paper' : 'text.primary'
        }
        fontSize="12px"
        styleButton={{
          borderRadius: '8px',
          border: `1px solid ${selectedId === id ? '#B6B6B6' : 'none'}`,
        }}
        content="Invite"
        fontWeight={400}
        onClick={() => {
          setSelectedId(id);
        }}
        styleText={{
          fontWeight: 500,
          fontSize: '12px',
        }}
      />
    </Grid>
  </Grid>
);

export default FriendItem;
