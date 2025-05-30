import {useState} from 'react';
import {Box, Button, Drawer} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {ModalHeader} from '@/components/molecules/ModalHeader';
import {theme} from '@/config/theme';
import type {marginType} from '@/types/common';

type SelectMarginTypeDrawerProps = {
  open: boolean;
  handleSelect: (marginType: marginType) => void;
  onClose: () => void;
};

export const SelectMarginTypeDrawer = ({
  open,
  handleSelect,
  onClose,
}: SelectMarginTypeDrawerProps) => {
  const [selectedMarginType, setSelectedMarginType] =
    useState<marginType>('isolate');
  const onSelect = (ot: marginType) => {
    setSelectedMarginType(ot);
  };
  const onConfirm = () => {
    handleSelect(selectedMarginType);
    onClose();
  };
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="bottom"
      sx={{
        'div.MuiPaper-root': {
          borderTopRightRadius: '.5rem',
          borderTopLeftRadius: '.5rem',
          backgroundImage: 'none',
          overflow: 'hidden',
        },
      }}>
      <ModalHeader title="Margin mode " onClose={onClose} />
      <Grid
        container
        size={12}
        spacing={1}
        p={1}
        sx={{
          button: {
            textTransform: 'none',
            borderRadius: theme.shape.borderRadius,
            height: '3.25rem',
            borderWidth: '2px',
          },
        }}>
        <Grid size={6}>
          <Button
            onClick={() => onSelect('cross')}
            fullWidth
            variant="outlined"
            color="primary"
            sx={{
              borderColor:
                selectedMarginType === 'isolate' ? 'text.secondary' : 'inherit',
            }}>
            Cross
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            onClick={() => onSelect('isolate')}
            fullWidth
            variant="outlined"
            color="primary"
            sx={{
              borderColor:
                selectedMarginType === 'cross' ? 'text.secondary' : 'inherit',
            }}>
            Isolate
          </Button>
        </Grid>
      </Grid>
      <Box sx={{width: 1, p: 1}}>
        <Button
          onClick={onConfirm}
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            mt: 2,
            height: '3.25rem',
            borderRadius: theme.shape.borderRadius,
          }}>
          Confirm
        </Button>
      </Box>
    </Drawer>
  );
};
