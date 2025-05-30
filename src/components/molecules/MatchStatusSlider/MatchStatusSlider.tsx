import Grid from '@mui/material/Grid2';

import {MatchStatusSliderMark} from './components/MatchStatusSliderMark';
import {MatchStatusSliderTrack} from './components/MatchStatusSliderTrack';

import {useElementRect} from '@/hooks/custom/useElementRect';

export type MatchStatusSliderProps = {
  scale?: number;
  player1: {
    name: string;
    progressPercent: number;
    income?: number;
  };
  player2: {
    name: string;
    progressPercent: number;
    income?: number;
  };
};

export const MatchStatusSlider = (props?: MatchStatusSliderProps) => {
  const {containerRef, rect} = useElementRect({});
  const scale = props?.scale ?? 1;
  return (
    <Grid container ref={containerRef} size={12}>
      <Grid
        container
        size={12}
        sx={{
          height: `${2.5 * scale}rem`,
          position: 'relative',
        }}>
        <MatchStatusSliderMark
          name={props?.player1?.name ?? 'You'}
          progressPercent={props?.player1?.progressPercent ?? 5}
          isPlayerCurrentUser={true}
          containerRect={rect}
          income={props?.player1.income}
          scale={scale}
        />
      </Grid>
      <Grid size={12}>
        <MatchStatusSliderTrack scale={scale} />
      </Grid>
      <Grid
        size={12}
        container
        sx={{
          height: `${3 * scale}rem`,
        }}>
        <MatchStatusSliderMark
          name={props?.player2?.name ?? 'MAMAD'}
          // name={removeExtraCharacters(props?.player2?.name ?? 'MAMAD', 12)}
          progressPercent={props?.player2?.progressPercent ?? 90}
          containerRect={rect}
          income={props?.player2.income}
          scale={scale}
        />
      </Grid>
    </Grid>
  );
};
