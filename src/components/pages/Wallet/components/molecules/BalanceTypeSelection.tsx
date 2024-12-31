import {Check} from '@mui/icons-material';
import {List, ListItem, ListItemText} from '@mui/material';

import StickyHeader from '../atoms/StickyHeader';
import type {TBalanceType} from '../fakeData/data';
import {selectBalanceOptions} from '../fakeData/data';

type Props = {
  selectedBalanceType?: TBalanceType;
  setSelectedBalanceType?: React.Dispatch<React.SetStateAction<TBalanceType>>;
  handleCloseDrawer: (value: React.SetStateAction<boolean>) => void;
};

const SingleSelectionList = ({
  selectedBalanceType,
  setSelectedBalanceType,
  handleCloseDrawer,
}: Props) => (
  <List
    sx={{
      m: '0.5rem',
      bgcolor: 'background.paper',
      orderTopRightRadius: '24px',
      borderTopLeftRadius: '24px',
    }}>
    {/* header */}
    <StickyHeader
      header="Select Balance Type"
      handleCloseDrawer={handleCloseDrawer}
    />
    {/*  */}
    {selectBalanceOptions.map(opt => (
      <ListItem
        key={opt}
        onClick={() => {
          setSelectedBalanceType && setSelectedBalanceType(opt);
        }}
        secondaryAction={
          selectedBalanceType === opt ? <Check color="primary" /> : undefined
        }
        sx={{
          bgcolor:
            selectedBalanceType === opt ? 'rgba(244, 216, 87, 0.1)' : undefined,
          borderRadius: theme => theme.shape.borderRadius,
          my: '0.5rem',
          gap: '0.5rem',
          height: '4rem',
          px: 2,
        }}
        disablePadding>
        <ListItemText primary={opt} sx={{fontSize: '0.9rem !important'}} />
      </ListItem>
    ))}
  </List>
);

export default SingleSelectionList;
