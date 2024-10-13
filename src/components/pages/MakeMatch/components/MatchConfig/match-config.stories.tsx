import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {MatchConfig} from './MatchConfig';

import {theme} from '@/config/theme';

const meta: Meta<typeof MatchConfig> = {
  tags: ['autodocs'],
  component: MatchConfig,
};

export default meta;
type Story = StoryObj<typeof MatchConfig>;

export const MatchConfigStories: Story = {
  render: () => (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      sx={{
        backgroundColor: theme.palette.background.default,
        p: 2,
      }}>
      <MatchConfig entryFee={20} prize={200} time={20} />
    </Box>
  ),
};
