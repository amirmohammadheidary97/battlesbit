import type {Grid2Props} from '@mui/material';
import {IconButton, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {Center} from '@/components/atoms/Center';
import {CustomIcon} from '@/components/atoms/icon';

type Props = {
  title?: string;
  onClose: () => void;
  containerProps?: Grid2Props;
};

export const ModalHeader = ({onClose, title, containerProps = {}}: Props) => {
  //
  const theme = useTheme();
  //
  return (
    <Grid
      container
      size={12}
      sx={{
        padding: '0.75rem 1rem 0.75rem 1rem',
      }}
      {...containerProps}>
      <Grid>
        {title && (
          <Center fullSize>
            <Typography variant={'h6'} color={theme.palette.text.primary}>
              {title}:
            </Typography>
          </Center>
        )}
      </Grid>
      <Grid offset={'auto'}>
        <IconButton onClick={onClose}>
          <CustomIcon type="close" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
