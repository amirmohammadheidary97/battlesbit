import {SwipeableDrawer} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {AssetItem} from './AssetItem';

import {ModalHeader} from '@/components/molecules/ModalHeader';
import type {Asset} from '@/gql-codegen/generated';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  assets: Asset[];
  handleSelect: (asset: Asset) => void;
  selectedAsset: Asset | 'Market';
};

export const AssetsDrawer = ({
  isOpen,
  onClose,
  onOpen,
  assets,
  handleSelect,
  selectedAsset,
}: Props) => (
  <SwipeableDrawer
    anchor={'bottom'}
    open={isOpen}
    onClose={onClose}
    onOpen={onOpen}
    sx={{
      '.MuiPaper-root': {
        backgroundImage: 'none',
        maxHeight: '60vh',
        overflowY: 'auto',
      },
    }}>
    <ModalHeader onClose={onClose} title="Assets" />
    <Grid container size={12} p={2} pt={0} spacing={0.25}>
      {assets?.length &&
        assets.map(asset => (
          <AssetItem
            key={asset.id}
            asset={asset}
            onClick={handleSelect}
            isSelected={
              selectedAsset !== 'Market' && selectedAsset.id === asset.id
            }
          />
        ))}
    </Grid>
  </SwipeableDrawer>
);
