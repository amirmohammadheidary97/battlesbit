import {Box, Slider, useTheme} from '@mui/material';
import type {Mark} from '@mui/material/Slider/useSlider.types';

import {flex} from '@/utils/flexHelper';

type Props = {
  value: number;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => void;
  step?: number;
  min: number;
  max: number;
  marks: Mark[] | undefined;
};
export const AmountSlider = ({marks = [], value, ...rest}: Props) => {
  const theme = useTheme();
  return (
    <Box
      className="slider-container"
      sx={{
        position: 'relative',
        '.MuiSlider-thumb': {
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          zIndex: 2,
          boxShadow: '-2px 1px 3px 0px #00000040',
          borderRadius: '2px',
        },
      }}>
      <Slider valueLabelDisplay="auto" value={value} {...rest} />
      {Boolean(marks?.length) &&
        marks.map((mark, index) => (
          <Box
            key={mark.value}
            className="slider-mark"
            onClick={e => {
              rest.onChange(e as any, mark.value, index);
            }}
            sx={{
              cursor: 'pointer',
              position: 'absolute',
              width: '14px',
              height: '14px',
              top: 'calc(50% - 10px)',
              left: `calc( ${(mark.value * 100) / rest.max + '%'} - 7px)`,
              border: `1px solid ${theme.palette.background.default}`,
              backgroundColor: theme.palette.background.paper,
              ...flex().acenter().jcenter().result,
            }}>
            <Box
              sx={{
                width: 'calc(100% - 4px)',
                height: 'calc(100% - 4px)',
                transform: 'rotateZ(45deg)',
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: '2px',
              }}></Box>
          </Box>
        ))}
    </Box>
  );
};
