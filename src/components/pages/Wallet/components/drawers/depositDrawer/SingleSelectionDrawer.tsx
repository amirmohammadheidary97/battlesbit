import {Drawer} from '@mui/material';

import {type TBalanceType} from '../../fakeData/data';
import SingleSelectionList from '../../molecules/BalanceTypeSelection';
import PaypalCurrencySelection from '../../molecules/PaypalCurrencySelection';
import ScrollableList from '../../organism/ScrollableList';

type NetworkDrawerProps = {
  openNetworkOptionDrawer: boolean;
  setOpenNetworkOptionDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'network' | 'balance' | 'paypal';
  selectedBalanceType?: TBalanceType;
  setSelectedBalanceType?: React.Dispatch<React.SetStateAction<TBalanceType>>;
  options?: string[];
  selectedCurrency?: string;
  setSelectedCurrency?: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
};
/////
const SingleSelectionDrawer = ({
  openNetworkOptionDrawer,
  setOpenNetworkOptionDrawer,
  type,
  selectedBalanceType,
  setSelectedBalanceType,
  options,
  selectedCurrency,
  setSelectedCurrency,
}: NetworkDrawerProps) => (
  ////
  <Drawer
    open={openNetworkOptionDrawer}
    keepMounted={false}
    sx={{
      '& .MuiDrawer-paper': {
        height: 'auto',
        bgcolor: type === 'network' ? 'transparent' : undefined,
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
      },
      '.MuiModal-backdrop': {
        bgcolor: type === 'network' ? 'transparent' : undefined,
      },
    }}
    anchor="bottom"
    onClose={() => setOpenNetworkOptionDrawer(false)}>
    {type === 'network' && (
      <ScrollableList
        containerProps={{
          bgcolor: 'background.paper',
        }}
        isTransaction={false}
        title="Network"
        height="390px"
      />
    )}
    {type === 'balance' && (
      <SingleSelectionList
        selectedBalanceType={selectedBalanceType}
        setSelectedBalanceType={setSelectedBalanceType}
        handleCloseDrawer={setOpenNetworkOptionDrawer}
      />
    )}
    {type === 'paypal' && options && (
      <PaypalCurrencySelection
        options={options}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        handleCloseDrawer={setOpenNetworkOptionDrawer}
      />
    )}
  </Drawer>
);

export default SingleSelectionDrawer;
