import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {DepositButton} from '../../atoms/DepositButton';

type FundsMessageTypeProps = {
  errorMessage: string;
  description: string;
  onClick: () => void;
};

export const FundsMessageItem: React.FC<FundsMessageTypeProps> = ({
  description,
  errorMessage,
  onClick,
}) => (
  <Grid>
    <Grid
      sx={{
        height: '46px',
        border: '1px solid rgba(255, 30, 56, 1)',
      }}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      borderRadius="12px"
      size={12}
      padding="0px 12px">
      <Typography
        color="error"
        component="span"
        variant="caption"
        fontFamily="'Nunito Sans', sans-serif"
        fontSize="12px"
        marginBottom={'5px'}
        lineHeight="11px">
        * {errorMessage}
      </Typography>
      <Typography
        color="text.white"
        component="span"
        variant="caption"
        fontFamily="'Nunito Sans', sans-serif"
        fontSize="10px"
        lineHeight="11px">
        {description}
      </Typography>
    </Grid>
    <Grid marginTop={'15px'} size={12}>
      <DepositButton onClick={onClick} />
    </Grid>
  </Grid>
);
