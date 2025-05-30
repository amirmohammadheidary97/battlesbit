import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {allQuickAccessButtonList} from '../../../utils/fakeData';

import QueryAccessButton from './QuickAccessButton';

const meta: Meta<typeof QueryAccessButton> = {
  tags: ['autodocs'],
  component: QueryAccessButton,
};

export default meta;
type Story = StoryObj<typeof QueryAccessButton>;

export const QueryAccessButtonStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <QueryAccessButton buttonList={allQuickAccessButtonList} />
    </Box>
  ),
};
