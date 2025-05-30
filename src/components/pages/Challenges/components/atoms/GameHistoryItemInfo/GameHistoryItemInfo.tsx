import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import levelDownImage from '@/assets/img/bg/levelDown.png';
import levelUpImage from '@/assets/img/bg/levelUp.png';
import {CustomIcon} from '@/components/atoms/icon';
import Pricing from '@/components/atoms/Pricing';

type GameHistoryItemInfoProps = {
  id: number;
  title: string;
  time: string;
  result: number;
  xp: number;
  entry: number;
  date: string;
};

const GameHistoryItemInfo = ({
  title,
  time,
  result,
  xp,
  entry,
  date,
}: GameHistoryItemInfoProps) => (
  <Grid
    size={12}
    container
    display={'flex'}
    flexDirection={'column'}
    flexWrap={'wrap'}>
    <Grid display={'flex'} alignItems={'center'}>
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
            mainTextProps={{fontSize: 10, fontWeight: 500, color: 'white'}}
            hideDecimalIfZero
            symbolTextProps={{
              fontSize: 8,
              fontWeight: 500,
              color: 'white',
            }}
          />
        </Grid>
      </Grid>
      <Grid display={'flex'} alignItems={'center'} ml={1}>
        <Typography
          fontSize={10}
          color="text.secondary"
          fontWeight={500}
          mt={0.4}
          sx={{
            fontFamily: 'Geogrotesque Wide',
            lineHeight: '100%',
            verticalAlign: 'middle',
          }}>
          Result:{' '}
        </Typography>
        <Grid ml={0.5} mt={0.4}>
          <img
            src={result > 0 ? levelUpImage : levelDownImage}
            alt="level"
            width={'12px'}
            height={'12px'}
          />
        </Grid>
        <Grid ml={0.5}>
          <Pricing
            amount={result}
            formatPrice={'USDT'}
            isPriceLimit
            mainTextProps={{
              fontSize: '10px',
              fontWeight: 500,
            }}
            decimalTextProps={{
              fontSize: '10px',
              fontWeight: 500,
            }}
            symbolTextProps={{
              fontSize: '8px',
              fontWeight: 500,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
    <Grid display={'flex'} alignItems={'center'} mt={0.4}>
      <Typography
        fontSize={10}
        color="text.secondary"
        fontWeight={500}
        sx={{
          fontFamily: 'Geogrotesque Wide',
          lineHeight: '100%',
          letterSpacing: '0.4%',
          verticalAlign: 'middle',
        }}>
        Date:{' '}
      </Typography>
      <Grid ml={0.5}>
        <Typography
          fontSize={8}
          color="text.primary"
          fontWeight={500}
          sx={{
            fontFamily: 'Geogrotesque Wide',
            lineHeight: '100%',
            letterSpacing: '0.4%',
            verticalAlign: 'middle',
          }}>
          {date}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);
export default GameHistoryItemInfo;
