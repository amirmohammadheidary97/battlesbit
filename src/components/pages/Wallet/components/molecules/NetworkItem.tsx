import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import BitcoinIcon from '@/assets/img/icons/general/bitcoin.png';
import {theme} from '@/config/theme';

type NetworkSelectItemProps = {
  value: number;
  title: string;
  handleToggle: (value: number) => () => void;
  checkedItem: number | undefined;
};

const NetworkSelectItem = ({
  value,
  title,
  handleToggle,
  checkedItem,
}: NetworkSelectItemProps) => {
  const isSelected = checkedItem === value;
  return (
    <ListItem
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={handleToggle(value)}
          checked={isSelected}
        />
      }
      sx={{
        bgcolor: isSelected
          ? 'rgba(244, 216, 87, 0.1)'
          : 'rgba(255, 255, 255, 0.1)',
        borderRadius: theme.shape.borderRadius,
        my: '8px',
        height: '50px',
        gap: '0.5rem',
      }}
      disablePadding>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={BitcoinIcon} alt="Bitcoin" />
        </ListItemAvatar>
        <ListItemText id={String(value)} primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default NetworkSelectItem;
