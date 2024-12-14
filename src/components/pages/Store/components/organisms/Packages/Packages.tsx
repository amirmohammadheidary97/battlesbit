import {useLocation, useNavigate} from 'react-router';
import {Box, styled, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {MoreItem} from '../../molecules/MoreItem/MoreItem';
import {PackageItem} from '../../molecules/PackageItem';

import type {PackagesType} from '@/types/models/store';

type PackagesProps = {
  title: string;
  description: string;
  packagesListItems: PackagesType[];
};

const PackagesWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '5px',
  width: '100%',
  height: '100%',
}));

export const Packages: React.FC<PackagesProps> = ({
  description,
  title,
  packagesListItems,
}) => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <PackagesWrapper>
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
              nav(location.pathname + '?state=all-packages');
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          overflow: 'hidden',
          overflowX: 'scroll',
          flexWrap: 'nowrap',
          width: '100%',
          marginTop: '7px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        rowSpacing={1}
        columnSpacing={1}>
        {packagesListItems.map((item, index) => (
          <PackageItem
            key={index}
            id={item?.id}
            amount={item.amount}
            currency={item.currency}
            img={item.img}
            character={item.character}
            leverage={item.leverage}
            status={item.status}
            title={item.title}
          />
        ))}
      </Grid>
    </PackagesWrapper>
  );
};
