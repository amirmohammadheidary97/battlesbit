import {useState} from 'react';
import {Box, useTheme} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {AmountSlider} from './AmountSlider';

const meta: Meta<typeof AmountSlider> = {
  tags: ['autodocs'],
  component: AmountSlider,
};

export default meta;
type Story = StoryObj<typeof AmountSlider>;

export const AmountSliderStories: Story = {
  render: () => {
    const max = 1000;
    const theme = useTheme();
    const [value, setValue] = useState<number | number[]>(250);
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}>
        <AmountSlider
          marks={[
            {value: 0 * max},
            {value: 0.25 * max},
            {value: 0.5 * max},
            {value: 0.75 * max},
            {value: 1 * max},
          ]}
          max={max}
          min={0}
          value={value as any}
          onChange={(e, v) => setValue(v)}
        />
      </Box>
    );
  },
};
