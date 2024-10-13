import {Button, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import {theme} from '@/config/theme';

type NewGameButtonProps = {
  onClick?: () => void;
  text: string;
};

const ButtonText = styled(Typography)({
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  alignSelf: 'center',
  zIndex: 1,
  fontSize: '13px',
  fontWeight: '600',
});

const LeftImage = styled('img')({
  aspectRatio: '0.65',
  objectFit: 'contain',
  objectPosition: 'center',
  width: '37px',
  position: 'absolute',
  zIndex: 0,
  left: '-3px',
  bottom: '-11px',
  height: '57px',
});

const RightImage = styled('img')({
  aspectRatio: '0.54',
  objectFit: 'contain',
  objectPosition: 'center',
  width: '31px',
  position: 'absolute',
  zIndex: 0,
  right: '0px',
  bottom: '-15px',
  height: '57px',
});

export const NewGameButton: React.FC<NewGameButtonProps> = ({
  onClick,
  text,
}) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    fullWidth
    sx={{
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.common['primary-gradiant'],
      boxShadow: '0px 2px 8px 0px rgba(243, 199, 59, 0.2)',
      position: 'relative',
      minHeight: '52px',
      padding: '0 12px',
      overflow: 'hidden',
      color: 'white',
    }}
    startIcon={
      <LeftImage
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/94e7cb83b68decaaf8e4a15671a5a08060193d96ba43dae7d29cc2a9c115a488?apiKey=305c4308d1064f65b99840ae6fe4e523&"
        alt=""
      />
    }
    endIcon={
      <RightImage
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/637231e5d33e1ff9cbfa86f34eb649315a785930dcd68d133ea7bdc3bdc64763?apiKey=305c4308d1064f65b99840ae6fe4e523&"
        alt=""
      />
    }>
    <ButtonText>{text}</ButtonText>
  </Button>
);
