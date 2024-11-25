import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {GetNewAvatarItem} from '../../components/molecules/GetNewAvatarItem';
import FullPageDrawerContainer from '../../components/organisms/DrawerContainer/DrawerContainer';

import type {NewAvatarsType} from '@/types/models/store';

type Props = {
  isAllAvatarsDraweropen: boolean;
  handleCloseAllAvatarsDrawerDrawer?: () => void;
  allAvatars: NewAvatarsType[];
  title: string;
};
const AllAvatarsDrawerDrawer = ({
  handleCloseAllAvatarsDrawerDrawer,
  isAllAvatarsDraweropen,
  allAvatars,
  title,
}: Props) => (
  <FullPageDrawerContainer
    isFixedBackWard={true}
    isOpen={isAllAvatarsDraweropen}
    handleCloseDrawer={handleCloseAllAvatarsDrawerDrawer}
    PageTitle={'Avatars'}>
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
        {allAvatars.map((item, index) => (
          <GetNewAvatarItem
            hieght="105px"
            size={3}
            imageHeight="84px"
            imageWidth="84px"
            key={index}
            {...item}
          />
        ))}
      </Grid>
    </>
  </FullPageDrawerContainer>
);

export default AllAvatarsDrawerDrawer;
