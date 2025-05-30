import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {CustomIcon} from '@/components/atoms/icon';
import type {IconType} from '@/types/props/icons';

type PreviewChallengeItemBoxProps = {
  value: string;
  currency?: string;
  typeIcon: IconType;
  href?: string;
  viewBox?: string;
};

const PreviewChallengeItemBox = ({
  value,
  currency,
  typeIcon,
  href,
  viewBox = '0 0 13 13',
}: PreviewChallengeItemBoxProps) => (
  <Grid
    sx={{
      width: '100%',
      height: '103px',
      backgroundColor: 'background.paper',
      padding: '12px',
      borderRadius: '12px',
    }}
    display={'flex'}
    alignItems={'center'}
    flexDirection={'column'}>
    <CustomIcon
      sx={{width: '46px', height: '46px'}}
      viewBox={viewBox}
      type={typeIcon}
    />
    <Grid mt={'5px'}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Geogrotesque Wide Semi',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '0%',
          textAlign: 'center',
          alignSelf: 'flex-end',
          textTransform: 'none',
          capHeight: 'cap',
        }}>
        {value}
      </Typography>
    </Grid>
    {currency && (
      <Grid>
        <Typography
          color="text.secondary"
          sx={{
            fontSize: '8px',
            fontWeight: 500,
            lineHeight: '11px',
            letterSpacing: '0%',
            textAlign: 'center',
            alignSelf: 'flex-end',
            textTransform: 'uppercase',
            capHeight: 'cap',
          }}>
          {currency}
        </Typography>
      </Grid>
    )}
    {href && (
      <Grid>
        <Typography
          color="primary.main"
          sx={{
            fontFamily: 'Geogrotesque Wide',
            fontSize: '8px',
            fontWeight: 500,
            lineHeight: '11px',
            letterSpacing: '0%',
            textAlign: 'center',
            alignSelf: 'flex-end',
            textTransform: 'uppercase',
            capHeight: 'cap',
          }}>
          tap to change
        </Typography>
      </Grid>
    )}
  </Grid>
);

export default PreviewChallengeItemBox;
