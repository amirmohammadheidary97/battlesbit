import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {GetIt} from './GetIt';

const meta: Meta<typeof GetIt> = {
  tags: ['autodocs'],
  component: GetIt,
};

export default meta;
type Story = StoryObj<typeof GetIt>;

export const GetItStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <GetIt currency="VSD" amount={10} />
    </Box>
  ),
};
