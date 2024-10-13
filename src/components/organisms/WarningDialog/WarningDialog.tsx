import {useId} from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import {theme} from '@/config/theme';

type Props = {
  open: boolean;
  onClose: () => void;
  description?: string;
  onConfirm: () => void;
};

export const WarningDialog = ({
  open,
  onClose,
  onConfirm,
  description,
}: Props) => {
  //
  const id = useId();
  //
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby={'alert-dialog-title' + id}
      aria-describedby={'alert-dialog-description' + id}
      sx={{
        '.MuiPaper-root': {
          borderRadius: theme.shape.borderRadius,
        },
      }}>
      <DialogTitle
        sx={{
          color: 'primary.main',
          textAlign: 'center',
          fontSize: '2rem',
          lineHeight: '2rem',
        }}
        id={'alert-dialog-title-' + id}>
        Warning !
      </DialogTitle>
      <DialogContent sx={{my: 2}}>
        <DialogContentText
          id={'alert-dialog-description' + id}
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            textAlign: 'left',
          }}>
          {description ??
            'Are You Sure ? This Action Cant Be Undo After Confirm ?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          button: {
            flexGrow: 1,
            borderRadius: theme.shape.borderRadius,
            py: 1.5,
            borderWidth: '2px',
          },
        }}>
        <Button size="large" variant="outlined" color="error" onClick={onClose}>
          No
        </Button>
        <Button
          size="large"
          variant="contained"
          color="success"
          onClick={onConfirm}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
