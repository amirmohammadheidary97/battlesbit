/* eslint-disable max-lines */
import {forwardRef, useImperativeHandle, useMemo, useState} from 'react';
import AnimatedNumber from 'react-awesome-animated-number';
import {Box, Button, Drawer, Slider} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {marks} from './constants';
import {LeverageRangeOption} from './LeverageRangeOption';

import 'react-awesome-animated-number/dist/index.css';

import {ModalHeader} from '@/components/molecules/ModalHeader';
import {theme} from '@/config/theme';

type LeverageDrawerProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (lvg: number) => void;
};

const leverageRangeOptions = [
  {min: 1, max: 10, remainings: 5},
  {min: 11, max: 20, remainings: 5},
  {min: 21, max: 30, remainings: 5},
  {min: 31, max: 40, remainings: 5},
  {min: 41, max: 50, remainings: 5},
  {min: 51, max: 60, remainings: 5},
  {min: 61, max: 70, remainings: 5},
];

export const LeverageDrawer = forwardRef(
  ({onClose, onConfirm, open}: LeverageDrawerProps, ref: any) => {
    const [lvg, setLvg] = useState(1);
    useImperativeHandle(ref, () => ({
      reset: (val?: number) => {
        setLvg(val ?? 1);
      },
    }));
    const handleInc = () => setLvg(l => (l < 100 ? l + 1 : l));
    const handleDec = () => setLvg(l => (l > 1 ? l - 1 : l));
    const onConfirmBtnClick = () => {
      onConfirm(lvg);
      onClose();
    };
    //
    return (
      <Drawer
        ref={ref}
        open={open}
        onClose={onClose}
        anchor="bottom"
        sx={{
          'div.MuiPaper-root': {
            borderTopRightRadius: '1.5rem',
            borderTopLeftRadius: '1.5rem',
            height: '55vh',
            backgroundImage: 'none',
            overflow: 'hidden',
          },
        }}>
        <Grid container size={12} spacing={0}>
          <ModalHeader title="Leverage" onClose={onClose} />
          {/* leverage input */}
          <Grid container size={12} p={2} pt={0}>
            <Grid size={12} spacing={1} container>
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
                      // width: '100px',
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
                  min={1}
                  // valueLabelDisplay="auto"
                  marks={marks}
                  value={lvg}
                  color="black"
                  onChange={(e, v) => {
                    setLvg(v as number);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* remainings */}
          <Grid
            className="hide-scrollbar"
            size={12}
            container
            sx={{
              height: '25vh',
              overflowY: 'auto',
            }}>
            {leverageRangeOptions.map(lr => (
              <LeverageRangeOption key={lr.min + ' - ' + lr.max} {...lr} />
            ))}
          </Grid>
          {/* button */}
          <Grid size={12} p={2}>
            <Button
              onClick={onConfirmBtnClick}
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                borderRadius: theme.shape.borderRadius,
              }}>
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    );
  },
);
