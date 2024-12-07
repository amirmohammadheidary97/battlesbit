import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {topPlayerFakeData} from '../../../utils/fakeData';

import Rating from './Rating';

const meta: Meta<typeof Rating> = {
  tags: ['autodocs'],
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const RatingStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Rating
        numberOne={topPlayerFakeData.numberOne}
        numberTwo={topPlayerFakeData.numberTwo}
        numberThree={topPlayerFakeData.numberThree}
      />
    </Box>
  ),
};
