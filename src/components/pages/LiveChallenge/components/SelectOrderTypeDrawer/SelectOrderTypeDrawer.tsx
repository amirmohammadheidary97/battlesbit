import {useState} from 'react';
import {Check} from '@mui/icons-material';
import {Box, Button, Drawer} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {ModalHeader} from '@/components/molecules/ModalHeader';
import {theme} from '@/config/theme';
import type {orderType} from '@/types/common';

type SelectOrderTypeDrawerProps = {
  open: boolean;
  onClose: () => void;
  handleOrderTypeChange: (o: orderType) => void;
  orderTypes: orderType[];
};

type OrderTypeOptionProps = {
  onSelect: (orderType: orderType) => void;
  isSelected: boolean;
  orderType: orderType;
};

export const SelectOrderTypeDrawer = ({
  onClose,
  open,
  handleOrderTypeChange,
  orderTypes,
}: SelectOrderTypeDrawerProps) => {
  const [selectedOrderType, setSelectedOrderType] =
    useState<orderType>('limit');
  const onSelect = (ot: orderType) => {
    setSelectedOrderType(ot);
  };
  const onConfirm = () => {
    handleOrderTypeChange(selectedOrderType);
    onClose();
  };
  return (
    <>
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
        <ModalHeader onClose={onClose} title="Order Type" />
        <Grid container size={12} spacing={1} p={1}>
          {orderTypes.map(ot => (
            <Grid size={12} key={ot}>
              <OrderTypeOption
                isSelected={selectedOrderType === ot}
                orderType={ot}
                onSelect={onSelect}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{width: 1, p: 1, pb: 2}}>
          <Button
            onClick={onConfirm}
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'none',
              mt: 2,
              borderRadius: theme.shape.borderRadius,
              height: '3.25rem',
            }}>
            Confirm
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

const OrderTypeOption = ({
  isSelected,
  onSelect,
  orderType,
}: OrderTypeOptionProps) => {
  const onClick = () => {
    onSelect(orderType);
  };
  return (
    <Button
      fullWidth
      color="primary"
      onClick={onClick}
      variant={isSelected ? 'text' : 'text'}
      sx={{
        justifyContent: 'space-between !important',
        height: '52px',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: isSelected
          ? theme.palette.primary['lighter']
          : 'inherit',
        color: 'inherit',
        textTransform: 'none',
      }}
      endIcon={
        isSelected ? (
          <>
            <Check />
          </>
        ) : (
          <></>
        )
      }>
      {orderType}
    </Button>
  );
};
