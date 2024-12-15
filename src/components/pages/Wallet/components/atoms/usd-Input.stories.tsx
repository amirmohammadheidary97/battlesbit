import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import UsdInput from './UsdInput';

const meta: Meta<typeof UsdInput> = {
  tags: ['autodocs'],
  component: UsdInput,
};

export default meta;
type Story = StoryObj<typeof UsdInput>;

export const UsdInputStories: Story = {
  render: () => (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <UsdInput
        amount={399}
        availableAmount={58}
        setAmount={() => {}}
        withTopCaption
      />
    </Box>
  ),
};
