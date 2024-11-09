import {useEffect, useState} from 'react';
import {Box, TextField, Typography} from '@mui/material';

import {flex} from '@/utils/flexHelper';

const UsdInput = ({
  amount,
  setAmount,
  withCaption,
}: {
  amount: any;
  setAmount: React.Dispatch<any>;
  withCaption: boolean;
}) => {
  //   const [amount, setAmount] = useState<any>();
  const [hasError, setHasError] = useState<boolean>(false);

  const handleAmountValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    if (amount !== undefined && isNaN(Number(amount))) {
      setHasError(true);
    } else setHasError(false);
  }, [amount]);

  return (
    <Box
      sx={{
        '.MuiInputBase-root': {
          height: '52px',
          borderRadius: theme => theme.shape.borderRadius,
          backgroundColor: theme => theme.palette.background.paper,
        },
        ...flex().column().gap('4px').result,
      }}>
      {withCaption && (
        <Typography variant="caption" fontFamily={'Nunito Sans'}>
          Receiving Solana Wallet address:
        </Typography>
      )}
      <TextField
        error={hasError}
        label={hasError ? 'Invalid Entry' : ''}
        variant="outlined"
        value={amount}
        onChange={handleAmountValue}
        fullWidth
        placeholder={!withCaption ? 'USD' : 'Amount Of Withdraw'}
        sx={{
          bgcolor: 'background.paper',
          borderRadius: theme => theme.shape.borderRadius,
        }}
      />
      <Typography
        variant="caption"
        color="#fff"
        sx={{span: {color: theme => theme.palette.primary.main}, px: '1rem'}}>
        {withCaption ? (
          <>
            Total Available: <span>45 USDT </span>
          </>
        ) : (
          <>
            You will Receive <span>54 BTC </span>
          </>
        )}
        {/* You will Receive <span>54 BTC </span> */}
      </Typography>
    </Box>
  );
};

export default UsdInput;
