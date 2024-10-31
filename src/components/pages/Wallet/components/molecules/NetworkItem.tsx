import {BabyChangingStation} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

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
}: NetworkSelectItemProps) => (
  <ListItem
    secondaryAction={
      <Checkbox
        edge="end"
        onChange={handleToggle(value)}
        checked={checkedItem === value}
      />
    }
    disablePadding>
    <ListItemButton>
      <ListItemAvatar>
        <Avatar>
          <BabyChangingStation />
        </Avatar>
      </ListItemAvatar>
      <ListItemText id={String(value)} primary={title} />
    </ListItemButton>
  </ListItem>
);

export default NetworkSelectItem;
