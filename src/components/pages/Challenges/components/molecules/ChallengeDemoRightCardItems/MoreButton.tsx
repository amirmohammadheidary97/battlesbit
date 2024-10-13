import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import {theme} from '@/config/theme';

const MoreButton = () => (
  <StyledButton>
    <Typography variant="body2">more</Typography>
  </StyledButton>
);

const StyledButton = styled('button')(() => ({
  borderRadius: '15px',
  display: 'flex',
  marginTop: '8px',
  width: '100%',
  flexDirection: 'column',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1px 40px',
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  // font: '600 12px IBM Plex, sans-serif',
}));

export default MoreButton;
