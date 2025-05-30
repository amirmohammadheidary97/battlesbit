import {useMemo} from 'react';
import AnimatedNumber from 'react-awesome-animated-number';
import {Box, Button, Slider} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {marks} from './constants';
import type {leverageSliderRange} from './LeverageDrawer';

import {theme} from '@/config/theme';

type props = {
  lvg: number;
  onLvgChange: (lvg: number) => void;
  sliderRange: leverageSliderRange;
};
export const LeverageInput = ({onLvgChange, lvg, sliderRange}: props) => {
  const handleInc = () => onLvgChange(lvg < 100 ? lvg + 1 : lvg);
  const handleDec = () => onLvgChange(lvg > 1 ? lvg - 1 : lvg);
  return (
    <>
      <Grid size={12} offset={0} spacing={1} container p={2}>
        <Grid size={9} offset={1.5}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}>
            <Button
              color="black"
              variant="contained"
              onClick={handleDec}
              size="small"
              sx={{
                fontSize: '1.5rem',
                aspectRatio: 1,
                height: '2.5rem',
                borderRadius: theme.shape.borderRadius,
                minWidth: 'unset !important',
              }}>
              -
            </Button>
            <Box
              sx={{
                display: 'inline-block',
                overflow: 'hidden',
                'div.AnimatedNumberItem__number': {
                  color: theme.palette.primary.main,
                },
              }}>
              {useMemo(
                () => (
                  <AnimatedNumber
                    value={lvg}
                    size={32}
                    duration={500}
                    style={{
                      color: 'text4',
                    }}
                  />
                ),
                [lvg],
              )}
              <Box
                sx={{
                  display: 'inline-block',
                  color: 'text2',
                  fontSize: '24px',
                  lineHeight: '24px',
                }}>
                X
              </Box>
            </Box>

            <Button
              onClick={handleInc}
              color="black"
              variant="contained"
              sx={{
                fontSize: '1.5rem',
                aspectRatio: 1,
                height: '2.5rem',
                borderRadius: theme.shape.borderRadius,
                minWidth: 'unset !important',
              }}>
              +
            </Button>
          </Box>
        </Grid>
        <Grid size={12}>
          <Slider
            sx={{
              'span.MuiSlider-markLabel[data-index="1"]': {
                left: 'calc(100% - 1.25rem) !important',
                color: '#fff',
                fontSize: '0.5rem',
                pt: 1,
              },
              'span.MuiSlider-markLabel[data-index="0"]': {
                left: 'calc(1.25rem) !important',
                color: '#fff',
                fontSize: '0.5rem',
                pt: 1,
              },
              'span.MuiSlider-rail': {
                background:
                  'linear-gradient(90deg, #0ECB81 0%, #F3C73B 49.21%, #FF1E38 100%)',
                height: '1.15rem',
                opacity: 1,
              },
              'span.MuiSlider-track': {
                backgroundColor: 'transparent',
                border: '0',
              },
              'span.MuiSlider-thumb': {
                width: '28px',
                height: '28px',
                backgroundColor: '#fff',
              },
            }}
            aria-label="Restricted values"
            step={1}
            min={sliderRange.min}
            max={sliderRange.max}
            marks={marks}
            value={lvg}
            color="black"
            onChange={(e, v) => {
              onLvgChange(v as number);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
