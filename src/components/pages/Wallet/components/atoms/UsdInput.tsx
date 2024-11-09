import {useEffect, useState} from 'react';
import {Box, TextField, Typography} from '@mui/material';

const UsdInput = ({
  amount,
  setAmount,
}: {
  amount: any;
  setAmount: React.Dispatch<any>;
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
      }}>
      <TextField
        error={hasError}
        label={hasError ? 'Invalid Entry' : ''}
        variant="outlined"
        value={amount}
        onChange={handleAmountValue}
        fullWidth
        placeholder="USD"
        sx={{
          bgcolor: 'background.paper',
          borderRadius: theme => theme.shape.borderRadius,
        }}
      />
      <Typography
        variant="caption"
        color="#fff"
        sx={{span: {color: theme => theme.palette.primary.main}, px: '1rem'}}>
        You will Receive <span>54 BTC </span>
      </Typography>
    </Box>
  );
};

export default UsdInput;
