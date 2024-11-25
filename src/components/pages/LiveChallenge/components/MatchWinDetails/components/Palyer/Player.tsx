import { Box, Typography } from "@mui/material";

import silvercrown from "@/assets/img/icons/general/silvercrown.png";
import goldcrown from "@/assets/img/icons/general/goldcrown.png";
import { theme } from "@/config/theme";

type Props = {
  name: string;
  avatar: string;
  level: number;
  isWinner?: boolean;
  size: number
}

const getBorderWidth = (width: number) => {
  return (8 / 100) * width;
};

export const Player = ({ size, avatar, level, name, isWinner = false }: Props) => {
  return (
    <Box sx={{
      width: `${size}px`,
      maxWidth: '200px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box
        sx={{
          justifyContent: 'center',
          display: 'flex',
          mb: `-${getBorderWidth(size)}px`,
          zIndex: 2,
          img: {
            width: '40%'
          }
        }}>
        <img src={isWinner ? goldcrown : silvercrown} alt={name} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '50%',
          width: `${size}px`,
          border: `${getBorderWidth(size)}px solid ${theme.palette.background.paper}`,
          aspectRatio: 1,
          img: {
            width: 1,
            height: 1,
          }
        }}>
        <img src={avatar} alt={name} />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          '.MuiTypography-root': {
            display: "inline-block"
          }
        }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="caption" color='primary' mx={0.5}>{level}</Typography>
        <Typography variant="overline" color='primary'>LV</Typography>
      </Box>
    </Box>
  )
}
