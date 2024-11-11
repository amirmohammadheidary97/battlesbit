import {useEffect, useState} from 'react';
import {Box, TextField, Typography} from '@mui/material';

import {flex} from '@/utils/flexHelper';

type TUsdInput = {
  amount: any;
  setAmount: React.Dispatch<any>;
  withTopCaption: boolean;
  availableAmount: number;
};

//
const UsdInput = ({
  amount,
  setAmount,
  withTopCaption,
  availableAmount,
}: TUsdInput) => {
  ///
  const [hasError, setHasError] = useState<boolean>(false);
  ///
  const handleAmountValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setAmount(e.target.value);
  };
  ///
  useEffect(() => {
    if (amount !== undefined && isNaN(Number(amount))) {
      setHasError(true);
    } else setHasError(false);
  }, [amount]);
  ///
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
      {withTopCaption && (
        <Typography variant="caption" fontFamily={'Nunito Sans'}>
          Amount you wish to transfer :
        </Typography>
      )}
      <TextField
        error={hasError}
        label={hasError ? 'Invalid Entry' : ''}
        variant="outlined"
        value={amount}
        onChange={handleAmountValue}
        fullWidth
        placeholder={!withTopCaption ? 'USD' : 'Amount Of Withdraw'}
        sx={{
          bgcolor: 'background.paper',
          borderRadius: theme => theme.shape.borderRadius,
        }}
      />
      <Typography
        variant="caption"
        color="#fff"
        sx={{span: {color: theme => theme.palette.primary.main}, px: '1rem'}}>
        {withTopCaption ? (
          <>
            Total Available: <span>{availableAmount} USDT </span>
          </>
        ) : (
          <>
            You will Receive <span>{availableAmount} BTC </span>
          </>
        )}
      </Typography>
    </Box>
  );
};

export default UsdInput;
