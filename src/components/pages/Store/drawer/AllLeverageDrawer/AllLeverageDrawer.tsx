import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {LeverageItem} from '../../components/molecules/LeverageItem';
import FullPageDrawerContainer from '../../components/organisms/DrawerContainer/DrawerContainer';

import type {LeverageItemType} from '@/types/models/store';

type Props = {
  isAllLeverageDraweropen: boolean;
  handleCloseAllLeverageDrawerDrawer?: () => void;
  allLeverage: LeverageItemType[];
  title: string;
};
const AllLeverageDrawerDrawer = ({
  handleCloseAllLeverageDrawerDrawer,
  isAllLeverageDraweropen,
  allLeverage,
  title,
}: Props) => (
  <FullPageDrawerContainer
    isFixedBackWard={true}
    isOpen={isAllLeverageDraweropen}
    handleCloseDrawer={handleCloseAllLeverageDrawerDrawer}
    PageTitle={'Leverage'}>
    <>
      <Grid>
        <Typography
          component="p"
          variant="caption"
          marginBottom="10px"
          fontSize="14px"
          fontFamily="'Nunito Sans', sans-serif"
          lineHeight="10px"
          padding="10px 20px"
          color="text.secondary">
          {title}
        </Typography>
      </Grid>
      <Grid container rowSpacing={1} padding="5px 20px" columnSpacing={1}>
        {allLeverage.map((item, index) => (
          <LeverageItem key={index} {...item} />
        ))}
      </Grid>
    </>
  </FullPageDrawerContainer>
);

export default AllLeverageDrawerDrawer;
