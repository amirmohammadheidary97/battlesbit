import {Drawer} from '@mui/material';

import ScrollableList from '../../organism/ScrollableList';

type NetworkDrawerProps = {
  openNetworkOptionDrawer: boolean;
  setOpenNetworkOptionDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};
/////
const NetworkSelectionDrawer = ({
  openNetworkOptionDrawer,
  setOpenNetworkOptionDrawer,
}: NetworkDrawerProps) => (
  ////
  <Drawer
    open={openNetworkOptionDrawer}
    keepMounted={false}
    sx={{
      '& .MuiDrawer-paper': {
        height: 'auto',
        bgcolor: 'transparent',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
      },
      '.MuiModal-backdrop': {
        bgcolor: 'transparent',
      },
    }}
    anchor="bottom"
    onClose={() => setOpenNetworkOptionDrawer(false)}>
    <ScrollableList
      containerProps={{
        bgcolor: 'background.paper',
      }}
      isTransaction={false}
      title="Network"
      height="390px"
    />
  </Drawer>
);

export default NetworkSelectionDrawer;
