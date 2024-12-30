import {List, ListItem, ListItemText} from '@mui/material';

import BitcoinIcon from '@/assets/img/icons/general/bitcoin.png';

type Props = {
  options: string[];
  selectedCurrency?: string;
  setSelectedCurrency?: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
};

const PaypalCurrencySelection = ({
  options,
  setSelectedCurrency,
  selectedCurrency,
}: Props) => (
  <List
    sx={{
      m: '0.5rem',
      bgcolor: 'background.paper',
      orderTopRightRadius: '24px',
      borderTopLeftRadius: '24px',
    }}>
    {options.map(opt => (
      <ListItem
        key={opt}
        onClick={() => {
          setSelectedCurrency && setSelectedCurrency(opt);
        }}
        sx={{
          bgcolor:
            selectedCurrency === opt ? 'rgba(244, 216, 87, 0.1)' : undefined,
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
