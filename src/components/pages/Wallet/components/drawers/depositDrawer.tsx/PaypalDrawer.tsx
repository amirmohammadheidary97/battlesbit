import FullPageDrawerContainer from '../../organism/DrawerContainer';

type PaypalDrawerProps = {
  isOpen: boolean;
  handleCloseDrawer: () => void;
};
const PaypalDrawer = ({isOpen, handleCloseDrawer}: PaypalDrawerProps) => {
  let x = 0;
  return (
    <FullPageDrawerContainer
      handleCloseDrawer={handleCloseDrawer}
      isOpen={isOpen}>
      <>paypal + {x}</>
    </FullPageDrawerContainer>
  );
};

export default PaypalDrawer;
