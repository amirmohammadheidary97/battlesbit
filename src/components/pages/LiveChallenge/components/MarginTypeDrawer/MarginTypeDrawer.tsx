/* eslint-disable @typescript-eslint/no-unused-vars */
import {Drawer} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {ModalHeader} from '@/components/molecules/ModalHeader';
import type {marginType} from '@/types/common';

type MarginTypeDrawerProps = {
  open: boolean;
  selectedMarginType: marginType;
  handleSelect: (marginType: marginType) => void;
  onClose: () => void;
};

export const MarginTypeDrawer = ({
  open,
  handleSelect,
  selectedMarginType,
  onClose,
}: MarginTypeDrawerProps) => (
  <Drawer
    open={open}
    onClose={onClose}
    sx={{
      'div.MuiPaper-root': {
        borderTopRightRadius: '1.5rem',
        borderTopLeftRadius: '1.5rem',
        height: '40vh',
        backgroundImage: 'none',
        overflow: 'hidden',
      },
    }}>
    <Grid container size={12} spacing={0}>
      <ModalHeader title="Leverage" onClose={onClose} />
      <Grid size={12} container></Grid>
    </Grid>
  </Drawer>
);
