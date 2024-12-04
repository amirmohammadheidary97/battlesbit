import type {ReactElement} from 'react';
import {Drawer} from '@mui/material';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';

type DrawerProps = {
  isOpen: boolean;
  handleCloseDrawer?: () => void;
  children: ReactElement;
  PageTitle: string;
  isFixedBackWard?: boolean;
};

const FullPageDrawerContainer = ({
  isOpen,
  handleCloseDrawer,
  children,
  PageTitle,
  isFixedBackWard = false,
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
        paddingBottom: '10px',
        backgroundColor: 'background.default',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    }}>
    <BackwardTitle isFixedBackWard={isFixedBackWard} title={PageTitle} />
    {children}
  </Drawer>
);

export default FullPageDrawerContainer;
