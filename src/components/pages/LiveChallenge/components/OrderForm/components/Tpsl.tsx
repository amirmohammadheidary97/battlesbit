/* eslint-disable @typescript-eslint/no-unused-vars */
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

import type {TPSL} from '../OrderForm';

import {flex} from '@/utils/flexHelper';

type Props = TPSL & {
  setTpsl: React.Dispatch<React.SetStateAction<TPSL>>;
  basePrice: number;
};

export const Tpsl = ({enabled, sl, tp, setTpsl}: Props) => {
  //
  const theme = useTheme();
  const isOpen = enabled;
  const onToggle = () => {
    setTpsl(s => ({...s, enabled: !s.enabled}));
  };
  const onTpTriggerChange = (e: any) => {
    const inputVal = e.target.value;
    if (isNaN(inputVal)) return;
    const val = Number(inputVal);

    setTpsl(state => ({
      ...state,
      tp: {
        ...(tp ?? {}),
        price: val,
      },
    }));
  };
  const onProfitChange = (e: any) => {
    const inputVal = e.target.value;
    if (isNaN(inputVal)) return;
    const val = Number(inputVal);
    setTpsl(state => ({
      ...state,
      tp: {
        ...(tp ?? {}),
        profit: val,
      },
    }));
  };
  const onSLTriggerChange = (e: any) => {
    const inputVal = e.target.value;
    if (isNaN(inputVal)) return;
    const val = Number(inputVal);
    setTpsl(state => ({
      ...state,
      sl: {
        ...(sl ?? {}),
        price: val,
      },
    }));
  };
  const onLoss = (e: any) => {
    const inputVal = e.target.value;
    if (isNaN(inputVal)) return;
    const val = Number(inputVal);
    setTpsl(state => ({
      ...state,
      sl: {
        ...(sl ?? {}),
        loss: val,
      },
    }));
  };
  const onClose = () => {
    setTpsl(s => ({...s, enabled: false}));
  };
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
        {enabled && (
          <IconButton onClick={onClose}>
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        )}
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
            Stop Lost
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

/*


const handleTpTriggerPriceChange = (e) => {
  const value = e.target.value;
  setTpTriggerPrice(value);

  if (basePrice) {
    setProfit(value ? (parseFloat(value) - parseFloat(basePrice)).toFixed(2) : '');
  }
};

const handleProfitChange = (e) => {
  const value = e.target.value;
  setProfit(value);

  if (basePrice) {
    setTpTriggerPrice(value ? (parseFloat(basePrice) + parseFloat(value)).toFixed(2) : '');
  }
};

const handleSlTriggerPriceChange = (e) => {
  const value = e.target.value;
  setSlTriggerPrice(value);

  if (basePrice) {
    setSl(value ? (parseFloat(basePrice) - parseFloat(value)).toFixed(2) : '');
  }
};

const handleSlChange = (e) => {
  const value = e.target.value;
  setSl(value);

  if (basePrice) {
    setSlTriggerPrice(value ? (parseFloat(basePrice) - parseFloat(value)).toFixed(2) : '');
  }
};

*/
