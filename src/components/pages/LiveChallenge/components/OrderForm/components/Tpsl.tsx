import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  TextField,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {useDisclosure} from '@/hooks/custom/useDisclosure';
import {flex} from '@/utils/flexHelper';

export const Tpsl = () => {
  //
  const theme = useTheme();
  const {isOpen, onToggle} = useDisclosure();
  //
  return (
    <Grid
      container
      size={12}
      padding={'0.5rem 0.5rem 0.5rem 0.5rem'}
      sx={{
        border: `1px solid ${!isOpen ? theme.palette.background.paper : theme.palette.primary.main}`,
        borderRadius: '0.75rem',
      }}>
      <Grid
        size={12}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <FormControlLabel
          control={<Checkbox checked={isOpen} onChange={onToggle} />}
          label="TP/SL"
        />
        <IconButton
          sx={{
            svg: {
              color: theme.palette.background.paper,
            },
          }}>
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Grid>
      <Grid
        container
        size={12}
        display={isOpen ? 'flex' : 'none'}
        spacing={1.5}>
        <Grid
          size={12}
          sx={{
            '.MuiDivider-root': {
              borderColor: theme.palette.text.primary,
            },
          }}>
          <Divider />
        </Grid>
        <Grid size={12} container spacing={1}>
          <Grid size={9}>
            <TextField
              fullWidth
              label={'TP trigger price'}
              id="filled-amount-start-adornment"
              variant="filled"
              type="number"
            />
          </Grid>
          <Grid
            size={3}
            px={3}
            sx={{
              color: theme.palette.text.secondary,
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.paper,
              ...flex().jcenter().acenter().result,
            }}>
            Profit
          </Grid>
        </Grid>
        <Grid size={12} container spacing={1}>
          <Grid size={9}>
            <TextField
              fullWidth
              label={'SL trigger price'}
              id="filled-amount-start-adornment"
              variant="filled"
              type="number"
            />
          </Grid>
          <Grid
            size={3}
            px={3}
            sx={{
              color: theme.palette.text.secondary,
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.paper,
              ...flex().jcenter().acenter().result,
            }}>
            Profit
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
