import {Chip} from '@mui/material';

export type PositionChipProps = {
  type: 'side' | 'lvg' | 'other';
  value: string | number;
};
const getColor = ({type, value}: PositionChipProps) => {
  if (type === 'other' || type === 'lvg') return 'grey1';
  return type === 'side' && value === 'buy' ? 'success' : 'error';
};

export const PositionChip = ({type, value}: PositionChipProps) => (
  <Chip
    className={`position-chip position-chip-${type}`}
    sx={{
      borderRadius: '4px',
    }}
    label={type === 'lvg' ? `${value}X` : value}
    size="small"
    color={getColor({type, value})}
  />
);
