import {Close} from '@mui/icons-material';
import {ListItem, ListItemText} from '@mui/material';

type Props = {
  header: string;
  handleCloseDrawer: (value: React.SetStateAction<boolean>) => void;
};
const StickyHeader = ({handleCloseDrawer, header}: Props) => (
  <ListItem
    disablePadding
    secondaryAction={
      <Close fontSize="small" onClick={() => handleCloseDrawer(false)} />
    }
    sx={{
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 2,
      p: 1.5,
      bgcolor: 'background.paper',
    }}>
    <ListItemText
      primary={header}
      primaryTypographyProps={{variant: 'body1', fontWeight: 600}}
    />
  </ListItem>
);

export default StickyHeader;
