import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {Leverage} from './Leverage';

const meta: Meta<typeof Leverage> = {
  tags: ['autodocs'],
  component: Leverage,
};

export default meta;
type Story = StoryObj<typeof Leverage>;

export const LeverageStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Leverage
        description="You can change your avatar and nickname"
        leverageItems={[]}
        title="Leverage"
      />
    </Box>
  ),
};
