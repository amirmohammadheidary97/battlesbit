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
    {selectBalanceOptions.map(balance => (
      <BalanceCard
        key={balance}
        balance={balance}
        selectedBalanceType={selectedBalanceType}
        setSelectedBalanceType={setSelectedBalanceType}
      />
    ))}
  </List>
);

export default SingleSelectionList;

type BalanceCardProps = {
  selectedBalanceType?: TBalanceType;
  setSelectedBalanceType?: React.Dispatch<React.SetStateAction<TBalanceType>>;
  balance: TBalanceType;
};

const BalanceCard = ({
  selectedBalanceType,
  setSelectedBalanceType,
  balance,
}: BalanceCardProps) => {
  const onClick = () => {
    setSelectedBalanceType && setSelectedBalanceType(balance);
  };
  return (
    <>
      <ListItem
        onClick={onClick}
        secondaryAction={
          selectedBalanceType === balance ? (
            <Check color="primary" />
          ) : undefined
        }
        sx={{
          bgcolor:
            selectedBalanceType === balance ? 'primary.lighter' : undefined,
          borderRadius: theme => theme.shape.borderRadius,
          my: '0.5rem',
          gap: '0.5rem',
          height: '4rem',
          px: 2,
        }}
        disablePadding>
        <ListItemText primary={balance} sx={{fontSize: '0.9rem !important'}} />
      </ListItem>
    </>
  );
};
