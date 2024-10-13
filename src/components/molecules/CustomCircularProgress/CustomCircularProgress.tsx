import type {ReactNode} from 'react';
import {Box} from '@mui/material';

import {flex} from '@/utils/flexHelper';

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({
  colour,
  pct,
  size,
  strokeWidth,
}: {
  colour: string;
  pct: number | null;
  size: number;
  strokeWidth: number;
}) => {
  const r = size - strokeWidth;
  const circ = 2 * Math.PI * size;
  const strokePct = ((100 - Number(pct)) * circ) / 100;
  return (
    <circle
      r={r}
      cx={size}
      cy={size}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"></circle>
  );
};

export const CustomCircularProgress = ({
  percentage = 0,
  size = 80,
  strokeW = 4,
  label,
  trackColor = '#ccc',
  indicatorColor = '#000',
}: {
  percentage: number;
  indicatorColor: string;
  trackColor: string;
  label?: ReactNode;
  size: number;
  strokeW: number;
}) => {
  const pct = cleanPercentage(percentage);

  return (
    <Box sx={{position: 'relative'}} width={size} height={size}>
      <svg width={size} height={size}>
        <g transform={`rotate(-90 ${`${size / 2} ${size / 2}`})`}>
          <Circle
            colour={trackColor}
            pct={100}
            size={size / 2}
            strokeWidth={strokeW}
          />
          <Circle
            colour={indicatorColor}
            pct={pct}
            size={size / 2}
            strokeWidth={strokeW}
          />
        </g>
      </svg>
      <Box
        width={size}
        height={size}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          ...flex().jcenter().acenter().result,
        }}>
        {label}
      </Box>
    </Box>
  );
};
