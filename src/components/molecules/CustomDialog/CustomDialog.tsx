import type {SxProps} from '@mui/material';
import {Dialog, DialogContent, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type CustomDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  props: SxProps;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
};

const CustomDialog = ({
  open,
  onClose,
  title,
  children,
  props,
  maxWidth = 'sm',
  fullWidth = false,
}: CustomDialogProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    sx={props}
    maxWidth={maxWidth}
    fullWidth={fullWidth}>
    <Grid container px={2} pt={2}>
      <Typography
        fontFamily={'Geogrotesque Wide Semi'}
        fontSize={18}
        fontWeight={400}
        variant="h6">
        {title}
      </Typography>
    </Grid>
    <DialogContent sx={{mt: '-8px', px: 2}}>{children}</DialogContent>
  </Dialog>
);

export default CustomDialog;
