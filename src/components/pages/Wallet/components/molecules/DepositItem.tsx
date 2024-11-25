import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';

import TitleValue from '../atoms/TitleValue';

import BitcoinIcon from '@/assets/img/icons/general/bitcoin.png';
import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

type Method = 'paypal' | 'bitcoin';
type Props = {
  title: Method;
  desc: string;
  setSelectedMethod: React.Dispatch<React.SetStateAction<Method | undefined>>;
  selectedMethod?: Method;
};
const DepositItem = ({
  title,
  desc,
  setSelectedMethod,
  selectedMethod,
}: Props) => {
  const handleSelectMethod = (value: Method) => {
    setSelectedMethod(value);
  };
  const isSelected = selectedMethod === title;
  return (
    <Grid
      onClick={() => handleSelectMethod(title)}
      sx={{
        bgcolor: isSelected ? 'rgba(243, 199, 59, 0.05)' : 'background.paper',
        borderRadius: theme.shape.borderRadius,
        ...flex().column().jcenter().acenter().result,
        gap: '0.5rem',
        border: isSelected ? '1px solid' : 'none',
        borderColor: 'primary.main',
        aspectRatio: '1/1',
        width: 'calc((100% - 32px)/3)',
        p: '1rem',
      }}>
      <Box>
        <img src={BitcoinIcon} alt="bitcoin-icon" />
      </Box>
      <TitleValue
        containerProps={{textTransform: 'capitalize'}}
        desc={desc}
        title={title}
      />
    </Grid>
  );
};

export default DepositItem;
