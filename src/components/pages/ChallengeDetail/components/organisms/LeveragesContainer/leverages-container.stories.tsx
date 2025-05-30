import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {leverages} from '../../../utils/fakeData';

import LeveragesContainer from './LeveragesContainer';

const meta: Meta<typeof LeveragesContainer> = {
  tags: ['autodocs'],
  component: LeveragesContainer,
};

export default meta;
type Story = StoryObj<typeof LeveragesContainer>;

export const LeveragesContainerStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <LeveragesContainer leverages={leverages} />
    </Box>
  ),
};
