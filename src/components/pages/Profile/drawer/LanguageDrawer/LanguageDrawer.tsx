import CloseIcon from '@mui/icons-material/Close';
import {Button, Drawer, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {languageListFakeData} from '../../utils/fakeData';

import FlagItem from './components/FlagItem';

type Props = {
  open: boolean;
  onClose: () => void;
  languageType: number;
  handleSetLanguageType: (type: number) => void;
};
const LanguageDrawer: React.FC<Props> = ({
  onClose,
  open,
  languageType,
  handleSetLanguageType,
}) => (
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
          Language
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
        {languageListFakeData.map(item => (
          <FlagItem
            handleSetLanguageType={handleSetLanguageType}
            key={item.id}
            {...item}
            languageType={languageType}
          />
        ))}
      </Grid>
      <Grid>
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

export default LanguageDrawer;
