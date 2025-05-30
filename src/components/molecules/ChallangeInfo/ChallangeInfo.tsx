import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import CustomButton from '@/components/atoms/Button';
import {CustomIcon} from '@/components/atoms/icon';

type TChallangeInfo = {
  title: string;
  balance: string;
  time: string;
  customButtonOutline: 'text' | 'outlined' | 'contained';
  colorButton: string;
  backgroundColorButton: string;
};

const ChallangeInfo = ({
  title,
  balance,
  time,
  customButtonOutline,
  colorButton,
  backgroundColorButton,
}: TChallangeInfo) => (
  <Grid container display={'flex'} flexDirection={'column'}>
    <Grid>
      <Typography
        variant="subtitle2"
        fontWeight={400}
        fontSize={'14px'}
        textAlign={'center'}>
        {title}
      </Typography>
    </Grid>
    <Grid
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      width={'87px'}>
      <Grid display={'flex'} alignItems={'center'} gap={0.2}>
        <Typography
          variant="overline"
          fontWeight={400}
          fontSize={'10px'}
          sx={{display: 'flex', alignItems: 'center'}}>
          {time}
        </Typography>
        <Grid sx={{display: 'flex', alignItems: 'center'}} pt={1.5}>
          <CustomIcon type="timer" />
        </Grid>
      </Grid>
      <Grid display={'flex'} alignItems={'center'} gap={0.3}>
        <Typography
          variant="overline"
          fontWeight={400}
          fontSize={'10px'}
          sx={{display: 'flex', alignItems: 'center'}}>
          ${balance}
        </Typography>
        <Grid sx={{display: 'flex', alignItems: 'center'}} pt={1.4}>
          <CustomIcon sx={{fill: 'transparent'}} type="lockOutline" />
        </Grid>
      </Grid>
    </Grid>
    <Grid>
      <CustomButton
        variant={customButtonOutline}
        color={colorButton}
        content="continue"
        fontSize="14px"
        fontWeight={400}
        textColor={colorButton}
        onClick={() => {}}
        styleButton={{
          backgroundColor: backgroundColorButton,
          border: '1px solid #E0E0E0',
          borderRadius: '7px',
          height: '32px',
          width: '107px',
        }}
        styleText={{
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textTransform: 'uppercase',
        }}
      />
    </Grid>
  </Grid>
);

export default ChallangeInfo;
