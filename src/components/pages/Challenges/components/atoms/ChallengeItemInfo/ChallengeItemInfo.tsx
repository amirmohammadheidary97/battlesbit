import {useNavigate} from 'react-router';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import CustomButton from '@/components/atoms/Button';
import {CustomIcon} from '@/components/atoms/icon';
import Pricing from '@/components/atoms/Pricing';

type ChallengeItemInfoProps = {
  id: number;
  title: string;
  time: string;
  rewards: number;
  xp: number;
  entry: number;
  href?: string;
};

const ChallengeItemInfo = ({
  title,
  time,
  rewards,
  xp,
  entry,
  href,
}: ChallengeItemInfoProps) => {
  const navigate = useNavigate();
  return (
    <Grid
      size={12}
      container
      display={'flex'}
      flexDirection={'column'}
      flexWrap={'wrap'}>
      <Grid display={'flex'} flexDirection={'column'}>
        <Grid display={'flex'}>
          <Typography
            variant="h6"
            fontSize={'16px'}
            fontWeight={'500'}
            sx={{
              fontFamily: 'Geogrotesque Wide',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}>
            {title}
          </Typography>
          <Grid
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            ml={1}
            sx={{
              border: '1px solid #595959',
              borderRadius: '4px',
              color: 'divider',
              width: '30px',
              height: '17px',
            }}>
            <Typography variant="h6" fontSize={'10px'} fontWeight={'400'}>
              1 v 1
            </Typography>
          </Grid>
        </Grid>
        <Grid display={'flex'} alignItems={'center'} mt={1}>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography
              variant="overline"
              color="text.secondary"
              fontSize={'10px'}
              fontWeight={'500'}>
              {time}
            </Typography>
            <Grid ml={0.4} sx={{height: '17px', width: '17px'}}>
              <CustomIcon viewBox={'0 0 17 17'} type={'graphicTimerIcon'} />
            </Grid>
          </Grid>
          <Grid display={'flex'} alignItems={'center'} ml={1}>
            <Typography
              variant="overline"
              color="text.secondary"
              fontSize={'10px'}
              fontWeight={'500'}>
              {xp}
            </Typography>
            <Grid ml={0.4} sx={{height: '17px', width: '17px'}}>
              <CustomIcon viewBox={'0 0 17 17'} type={'graphicXpIcon'} />
            </Grid>
          </Grid>
        </Grid>
        <Grid display={'flex'} alignItems={'center'}>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography
              fontSize={10}
              color="text.secondary"
              fontWeight={500}
              mt={0.2}
              sx={{
                fontFamily: 'Geogrotesque Wide',
                lineHeight: '100%',
                verticalAlign: 'middle',
              }}>
              Entry:{' '}
            </Typography>
            <Grid ml={0.5}>
              <Pricing
                amount={entry}
                formatPrice={'USDT'}
                mainTextProps={{fontSize: 14, fontWeight: 500, color: 'white'}}
                hideDecimalIfZero
                symbolTextProps={{
                  fontSize: 8,
                  fontWeight: 500,
                  color: 'white',
                  sx: {
                    ml: '2px',
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid display={'flex'} alignItems={'end'} ml={1}>
            <Typography fontSize={10} color="text.secondary" fontWeight={500}>
              Rewards:{' '}
            </Typography>
            <Grid ml={0.5}>
              <Pricing
                amount={rewards}
                formatPrice={'USDT'}
                mainTextProps={{
                  color: 'primary',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
                decimalTextProps={{
                  color: 'primary',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
                symbolTextProps={{
                  color: 'primary',
                  fontSize: '8px',
                  fontWeight: 500,
                  sx: {
                    ml: '1px',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {href && (
        <Grid mt={'10px'}>
          <CustomButton
            color="primary.main"
            content="See details"
            fontSize="12px"
            fontWeight={500}
            styleButton={{
              borderRadius: '8px',
            }}
            textColor="#000"
            variant="contained"
            backgroundColor="primary.main"
            onClick={() => {
              navigate(href);
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};
export default ChallengeItemInfo;
