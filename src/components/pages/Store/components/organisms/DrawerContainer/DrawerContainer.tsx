import type {ReactElement} from 'react';
import {Drawer} from '@mui/material';

import {BackwardTitle} from '@/components/molecules/BackwardTitle';
import {BackwardTitleFixed} from '@/components/molecules/BackwardTitleFixed';

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
        backgroundColor: 'background.default',
      },
    }}>
    {isFixedBackWard ? (
      <BackwardTitle title={PageTitle} />
    ) : (
      <BackwardTitleFixed title={PageTitle} />
    )}
    {children}
  </Drawer>
);

export default FullPageDrawerContainer;
