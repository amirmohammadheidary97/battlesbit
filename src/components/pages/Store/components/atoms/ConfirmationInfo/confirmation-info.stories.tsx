import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ConfirmationInfo} from './ConfirmationInfo';

const meta: Meta<typeof ConfirmationInfo> = {
  tags: ['autodocs'],
  component: ConfirmationInfo,
};

export default meta;
type Story = StoryObj<typeof ConfirmationInfo>;

export const ConfirmationInfoStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ConfirmationInfo
        amount2={312}
        currency2="USTD"
        amount={10}
        currency="VSD"
        type="Avatars"
      />
    </Box>
  ),
};
