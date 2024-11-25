import { usePositionsState } from '../../state/positions.state';

import { WarningDialog } from '@/components/organisms/WarningDialog';

const CancelAndReverseWarningDialog = () => {
  //
  const {
    setSelectedPositionToCancel,
    selectedPositionToCancel,
    selectedPositionToReverse,
    setSelectedPositionToReverse,
  } = usePositionsState();
  const open =
    Boolean(selectedPositionToCancel) || Boolean(selectedPositionToReverse);
  const onClose = () => {
    if (selectedPositionToCancel) {
      setSelectedPositionToCancel(undefined);
    }
    if (selectedPositionToReverse) {
      setSelectedPositionToReverse(undefined);
    }
  };
  //
  return (
    <WarningDialog
      open={open}
      onClose={onClose}
      onConfirm={() => { }}
      description={
        selectedPositionToCancel
          ? 'Are You Sure To Cancel This Position ?'
          : 'Are You Sure To Reverse This Position ?'
      }
    />
  );
};

export default CancelAndReverseWarningDialog;