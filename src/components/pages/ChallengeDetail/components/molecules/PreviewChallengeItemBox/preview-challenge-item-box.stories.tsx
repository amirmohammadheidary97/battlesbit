import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import PreviewChallengeItemBox from './PreviewChallengeItemBox';

const meta: Meta<typeof PreviewChallengeItemBox> = {
  tags: ['autodocs'],
  component: PreviewChallengeItemBox,
};

export default meta;
type Story = StoryObj<typeof PreviewChallengeItemBox>;

export const PreviewChallengeItemBoxStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <PreviewChallengeItemBox
        value="100"
        currency={'USD'}
        typeIcon={'backMain'}
        href="#"
      />
    </Box>
  ),
};
