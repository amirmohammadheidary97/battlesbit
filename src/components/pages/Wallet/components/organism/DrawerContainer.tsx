import type {ReactElement} from 'react';
import {Drawer} from '@mui/material';

type DrawerProps = {
  isOpen: boolean;
  handleCloseDrawer: () => void;
  children: ReactElement;
};

const FullPageDrawerContainer = ({
  isOpen,
  handleCloseDrawer,
  children,
}: DrawerProps) => (
  <Drawer
    anchor="right"
    open={isOpen}
    keepMounted={false}
    onClose={handleCloseDrawer}
    sx={{
      '& .MuiDrawer-paper': {
        width: '100%',
        height: '100vh',
        backgroundColor: 'background.default',
      },
    }}>
    {children}
  </Drawer>
);

export default FullPageDrawerContainer;
