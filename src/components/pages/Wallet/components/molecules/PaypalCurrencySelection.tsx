import {Check} from '@mui/icons-material';
import {List, ListItem, ListItemText} from '@mui/material';

import StickyHeader from '../atoms/StickyHeader';

import BitcoinIcon from '@/assets/img/icons/general/bitcoin.png';

type Props = {
  options: string[];
  selectedCurrency?: string;
  setSelectedCurrency?: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  handleCloseDrawer: (value: React.SetStateAction<boolean>) => void;
};

const PaypalCurrencySelection = ({
  options,
  setSelectedCurrency,
  selectedCurrency,
  handleCloseDrawer,
}: Props) => (
  <List
    sx={{
      mx: 1,
      p: 0,
      bgcolor: 'background.paper',
      orderTopRightRadius: '24px',
      borderTopLeftRadius: '24px',
      maxHeight: 300,
      overflowY: 'auto',
      position: 'relative',
    }}>
    {/*  header  */}
    <StickyHeader
      header="Select Currency"
      handleCloseDrawer={handleCloseDrawer}
    />
    {/*  */}
    {options.map(opt => (
      <ListItem
        key={opt}
        onClick={() => {
          setSelectedCurrency && setSelectedCurrency(opt);
        }}
        secondaryAction={
          selectedCurrency === opt ? <Check color="primary" /> : undefined
        }
        sx={{
          backgroundColor:
            selectedCurrency === opt ? 'primary.lighter' : undefined,
          borderRadius: theme => theme.shape.borderRadius,
          my: '0.5rem',
          gap: '1.5rem',
          height: '4rem',
          px: 2,
        }}
        disablePadding>
        <img src={BitcoinIcon} />
        <ListItemText primary={opt} sx={{fontSize: '0.9rem !important'}} />
      </ListItem>
    ))}
  </List>
);

export default PaypalCurrencySelection;
