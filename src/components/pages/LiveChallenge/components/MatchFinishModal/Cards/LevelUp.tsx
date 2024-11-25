import { PlayerLevel } from "@/components/atoms/PlayerLevel";
import { flex } from "@/utils/flexHelper";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import btc from "@/assets/img/icons/general/star2.svg";
import vp from "@/assets/img/icons/general/vp.png";
import { useElementRect } from "@/hooks/custom/useElementRect";
import ReactConfetti from "react-confetti";
import { useTimeout, useWindowSize } from "react-use";
import { theme } from "@/config/theme";
import { numberWithCommas } from "@/utils/money-number-fromatter";

type Props = {
  level: number;
}

const getSize = (width: number) => {
  let size: number = 100;
  if (width <= 768) {
    size = (width - 32) / 2
  }
  else { size = (768 - 32) / 2 }
  return size > 180 ? 180 : size
}

const LevelUp = ({ level }: Props) => {
  const { width, height } = useWindowSize();
  const [isConfettiOpen] = useTimeout(5000);
  const { containerRef, rect } = useElementRect({})
  return (
    <Grid
      ref={containerRef}
      container
      size={12}
      spacing={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        p: 2,
        pt: 0
      }}>
      <ReactConfetti
        width={width}
        height={height}
        numberOfPieces={700}
        recycle={!isConfettiOpen()}
      />
      <Grid
        size={12}
        container
        justifyContent={'center'}
        sx={{
          height: getSize(width) / 2,
          position: 'relative'
        }}>
        <Grid sx={{
          position: 'absolute',
          width: 1,
          bottom: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center'
        }}>
          <PlayerLevel level={level} size={getSize(width)} />
        </Grid>
      </Grid>
      <Grid size={12} justifyContent={'center'}>
        <Typography variant="h4" textAlign={'center'}>LEVEL UP!</Typography>
      </Grid>
      <Grid size={12} container justifyContent={'space-between'}>
        <Grid>
          <AchievmentEarn amount={12000} img={btc} name="VSD coin earned" />
        </Grid>
        <Grid>
          <AchievmentEarn amount={24000} img={vp} name="VSD coin earned" />
        </Grid>
      </Grid>
      <Grid size={12}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            height: '3rem'
          }}
        >
          Next
        </Button>
      </Grid>
    </Grid>);
}

type AchievmentEarnProps = {
  img: string;
  amount: number;
  name: string
}
const AchievmentEarn = ({ amount, img, name }: AchievmentEarnProps) => {
  return (
    <Box sx={{
      ...flex().column().acenter().gap(0).result,
    }}>
      <Box sx={{
        img: {
          width: '2.5rem'
        }
      }}>
        <img src={img} />
      </Box>
      <Typography variant="button">{numberWithCommas(amount)}</Typography>
      <Typography variant="caption">{name} earned</Typography>
    </Box>
  )
}

export default LevelUp;
