import Grid from '@mui/material/Grid2';

import LeverageItem from '../../molecules/LeverageItem';

import type {ILeverage} from '@/types/models/leverage';

type LeveragesContainerProps = {
  leverages: ILeverage[];
};

const LeveragesContainer = ({leverages}: LeveragesContainerProps) => (
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
    columnSpacing={1.5}>
    {leverages.map(leverage => (
      <LeverageItem key={leverage.id} leverage={leverage} />
    ))}
  </Grid>
);

export default LeveragesContainer;
