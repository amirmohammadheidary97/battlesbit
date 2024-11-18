import type {ReactElement} from 'react';
import {Drawer} from '@mui/material';

import {BackwardTitleFixed} from '@/components/molecules/BackwardTitleFixed';

type DrawerProps = {
  isOpen: boolean;
  handleCloseDrawer?: () => void;
  children: ReactElement;
  PageTitle: string;
};

const FullPageDrawerContainer = ({
  isOpen,
  handleCloseDrawer,
  children,
  PageTitle,
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
    <BackwardTitleFixed title={PageTitle} />
    {children}
  </Drawer>
);

export default FullPageDrawerContainer;
