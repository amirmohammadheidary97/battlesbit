import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {getPackagesList} from '../../../utils/fakeData';

import {Packages} from './Packages';

const meta: Meta<typeof Packages> = {
  tags: ['autodocs'],
  component: Packages,
};

export default meta;
type Story = StoryObj<typeof Packages>;

export const PackagesStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Packages
        packagesListItems={getPackagesList}
        description="You can change your avatar and nickname ...."
        title="Leverage"
      />
    </Box>
  ),
};
