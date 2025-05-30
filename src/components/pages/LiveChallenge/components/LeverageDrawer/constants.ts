import type {Mark} from '@mui/material/Slider/useSlider.types';

export const marks: Mark[] = [
  {
    value: 1,
    label: 'LOW RISK',
  },
  {
    value: 100,
    label: 'HIGH RISK',
  },
];

export const leverageRangeOptions = [
  {min: 1, max: 10, remainings: 5},
  {min: 11, max: 20, remainings: 5},
  {min: 21, max: 30, remainings: 5},
  {min: 31, max: 40, remainings: 5},
  {min: 41, max: 50, remainings: 5},
  {min: 51, max: 60, remainings: 5},
  {min: 61, max: 70, remainings: 5},
];
