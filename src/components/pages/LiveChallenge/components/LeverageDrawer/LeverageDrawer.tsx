import {forwardRef, useCallback, useImperativeHandle, useState} from 'react';
import {Button, Drawer} from '@mui/material';
import Grid from '@mui/material/Grid2';

import {leverageRangeOptions} from './constants';
import {LeverageInput} from './LeverageInput';
import {LeverageRangeOption} from './LeverageRangeOption';

import 'react-awesome-animated-number/dist/index.css';

import {ModalHeader} from '@/components/molecules/ModalHeader';
import {theme} from '@/config/theme';

export type leverageSliderRange = {
  min: number;
  max: number;
};
type LeverageDrawerProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (lvg: number) => void;
};

export const LeverageDrawer = forwardRef(
  ({onClose, onConfirm, open}: LeverageDrawerProps, ref: any) => {
    useImperativeHandle(ref, () => ({
      reset: (val?: number) => {
        setLvg(val ?? 1);
      },
    }));
    const [lvg, setLvg] = useState(1);
    const [sliderRange, setSliderRange] = useState<leverageSliderRange>({
      min: 1,
      max: 10,
    });

    const onRangeChange = useCallback(
      (r: leverageSliderRange) => {
        setSliderRange(r);
        setLvg(r.min);
      },
      [setSliderRange, setLvg],
    );
    const onLvgChange = useCallback((n: number) => setLvg(n), [setLvg]);
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
            backgroundImage: 'none',
            overflow: 'hidden',
          },
        }}>
        <Grid
          container
          size={12}
          spacing={0}
          sx={{
            height: '60vh',
          }}>
          <Grid
            container
            size={12}
            spacing={0}
            sx={{height: 'calc(60vh - 52px - 32px)'}}>
            <Grid
              container
              size={12}
              sx={{
                height: '30vh',
              }}>
              <ModalHeader title="Leverage" onClose={onClose} />
              {/* leverage input */}
              <LeverageInput
                lvg={lvg}
                onLvgChange={onLvgChange}
                sliderRange={sliderRange}
              />
            </Grid>
            {/* remainings */}
            <Grid
              className="hide-scrollbar"
              size={12}
              container
              p={2}
              pt={0}
              sx={{
                height: 'calc(30vh - 52px - 32px)',
                overflowY: 'auto',
              }}>
              {leverageRangeOptions.map(lr => (
                <LeverageRangeOption
                  onSelect={onRangeChange}
                  key={lr.min + ' - ' + lr.max}
                  {...lr}
                />
              ))}
            </Grid>
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
                height: '52px',
              }}>
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    );
  },
);
