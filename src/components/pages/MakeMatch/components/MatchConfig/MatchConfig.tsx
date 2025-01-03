import {useState} from 'react';
import {AutoAwesome} from '@mui/icons-material';
import {Chip, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {DoubleButtonSwitch} from '@/components/molecules/DoubleButtonSwitch';
import {theme} from '@/config/theme';
import {flex} from '@/utils/flexHelper';

type Props = {
  entryFee: number;
  prize: number;
  time: number;
};

type Option = {
  label: string;
  value: number;
};

const options: [Option, Option] = [
  {
    label: '7 min',
    value: 7 * 60 * 1000,
  },
  {
    label: '30 min',
    value: 30 * 60 * 1000,
  },
];

export const MatchConfig = ({entryFee, prize, time}: Props) => {
  //
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  //
  return (
    <Grid container size={12} spacing={1}>
      <Grid size={12} container flexWrap={'nowrap'}>
        <MatchProp title="Entry fee" value={entryFee} unit="USDT" />
        <MatchProp title="Prize" value={prize} unit="USDT" />
        <MatchProp title="Time" value={time} unit="min" />
      </Grid>
      <Grid
        size={12}
        bgcolor={'background.paper'}
        p={2}
        container
        spacing={'10px'}
        sx={{borderRadius: theme => theme.shape.borderRadius}}>
        <Grid size={1}>
          <AutoAwesome color="primary" />
        </Grid>
        <Grid size={11}>
          <Typography variant="body1">
            You have free challenge bonus in your wallet if you want use it{' '}
            <Typography
              color="primary"
              component={'a'}
              href="./wallet"
              sx={{textDecoration: 'underline'}}>
              click here
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        size={12}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          p: 2,
        }}>
        <DoubleButtonSwitch
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          getLabel={op => op.label}
          getValue={op => op.value}
        />
      </Grid>
      <Grid size={12} sx={{display: 'flex', gap: '10px'}}>
        <Chip
          variant="outlined"
          color="default"
          sx={{color: 'GrayText'}}
          label="best game"
        />
        <Chip
          variant="outlined"
          color="default"
          sx={{color: 'GrayText'}}
          label="best game"
        />
        <Chip
          variant="outlined"
          color="default"
          sx={{color: 'GrayText'}}
          label="best game"
        />
      </Grid>
    </Grid>
  );
};

type MatchProps = {
  title: string;
  value: string | number;
  unit: string;
};
const MatchProp = ({title, unit, value}: MatchProps) => (
  <Grid
    container
    size={4}
    spacing={1}
    sx={{
      backgroundColor: theme.palette.background.paper,
      p: 2,
      borderRadius: theme.shape.borderRadius,
      '.MuiTypography-root': {
        color: theme.palette.text.primary,
      },
    }}>
    <Grid size={12}>
      <Typography variant="caption">{title}:</Typography>
    </Grid>
    <Grid
      size={12}
      sx={{
        ...flex().jstart().abaseline().gap(0.5).result,
      }}>
      <Typography variant="h6">{value}</Typography>
      <Typography variant="overline" sx={{marginInlineStart: 1}}>
        {unit}
      </Typography>
    </Grid>
  </Grid>
);

// type TimeOptionsProps = {
//   value: number;
//   options: [number, number];
//   onChange: (value: number) => void;
// };

// const TimeOptions = ({onChange, value}: TimeOptionsProps) => {
//   <Grid container size={12}>
//     <Grid size={6}>
//       <Button></Button>
//     </Grid>
//     <Grid size={6}></Grid>
//   </Grid>;
// };
