import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {ShowMoreBtn} from './ShowMoreBtn';

const meta: Meta<typeof ShowMoreBtn> = {
  tags: ['autodocs'],
  component: ShowMoreBtn,
};

export default meta;
type Story = StoryObj<typeof ShowMoreBtn>;

export const ShowMoreBtnStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ShowMoreBtn textColor="white" clickHandler={() => {}} />
    </Box>
  ),
};
