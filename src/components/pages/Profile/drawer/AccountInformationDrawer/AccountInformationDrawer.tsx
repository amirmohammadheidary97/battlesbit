import CloseIcon from '@mui/icons-material/Close';
import {Button, Drawer, TextField, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type Props = {
  open: boolean;
  onClose: () => void;
};
const AccountInformationDrawer: React.FC<Props> = ({onClose, open}) => (
  <Drawer
    keepMounted={false}
    anchor="bottom"
    open={open}
    onClose={onClose}
    sx={{
      '& .MuiDrawer-paper': {
        width: '100%',
        backgroundColor: 'background.paper',
      },
    }}>
    <Grid m={2} size={12} padding={' 0px 8px'}>
      <Grid
        size={12}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Typography
          variant="caption"
          fontWeight="600"
          fontSize="16px"
          lineHeight="20px"
          fontFamily="Nunito Sans"
          color={'text.white'}>
          Account information
        </Typography>
        <Typography
          onClick={onClose}
          variant="caption"
          fontWeight="600"
          fontSize="16px"
          lineHeight="20px"
          fontFamily="Nunito Sans"
          color={'text.white'}>
          <CloseIcon />
        </Typography>
      </Grid>
      <Grid size={12} mt={3}>
        <Grid display={'flex'} flexDirection={'column'}>
          <Typography
            color={'text.white'}
            variant="caption"
            fontWeight={'400'}
            top={'40px'}
            fontSize={'12px'}
            mb={1}
            fontFamily="Nunito Sans">
            Phone Number
          </Typography>
          <TextField
            variant="outlined"
            type="text"
            value={'+9893939843214'}
            fullWidth
            size="small"
            sx={{
              bgcolor: 'background.default',
              borderRadius: '20px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '15px',
              },
            }}
          />
        </Grid>
        <Grid display={'flex'} flexDirection={'column'} mt={2}>
          <Typography
            color={'text.white'}
            variant="caption"
            fontWeight={'400'}
            top={'40px'}
            fontSize={'12px'}
            mb={1}
            fontFamily="Nunito Sans">
            Email
          </Typography>
          <TextField
            variant="outlined"
            type="text"
            value={'mehran.mate@gmail.com'}
            fullWidth
            size="small"
            sx={{
              bgcolor: 'background.default',
              borderRadius: '20px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '15px',
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid mt={3}>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          size="large"
          sx={{width: '100%', borderRadius: '8px', margin: '15px 0px'}}>
          Save
        </Button>
      </Grid>
    </Grid>
  </Drawer>
);

export default AccountInformationDrawer;
