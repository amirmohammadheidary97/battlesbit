import {useLocation, useNavigate} from 'react-router';
import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {styled} from '@mui/material/styles';

import {LeverageItem} from '../../molecules/LeverageItem';
import {MoreItem} from '../../molecules/MoreItem/MoreItem';

import type {LeverageItemType} from '@/types/models/store';

type LeverageProps = {
  leverageItems: LeverageItemType[];
  title: string;
  description: string;
};

const LeverageWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '5px',
  width: '100%',
  height: '100%',
}));

export const Leverage: React.FC<LeverageProps> = ({
  description,
  leverageItems,
  title,
}) => {
  const nav = useNavigate();
  const location = useLocation();
  return (
    <LeverageWrapper>
      <Grid display="flex" alignItems="start" justifyContent="space-between">
        <Grid display="flex" padding="2px" flexDirection="column">
          <Typography
            component="p"
            variant="caption"
            marginBottom="10px"
            fontSize="16px"
            fontFamily="'Nunito Sans', sans-serif"
            lineHeight="10px"
            color="text.white">
            {title}
          </Typography>
          <Typography
            component="span"
            variant="caption"
            fontWeight="400"
            fontSize="12px"
            lineHeight="15px"
            fontFamily="'Nunito Sans', sans-serif"
            color="text.secondary">
            {description}
          </Typography>
        </Grid>
        <Grid>
          <MoreItem
            navigateToDetail={() => {
              nav(location.pathname + '?state=all-leverage');
            }}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} marginTop="8px" columnSpacing={1}>
        {leverageItems.map((item, index) => (
          <LeverageItem key={index} {...item} />
        ))}
      </Grid>
    </LeverageWrapper>
  );
};
