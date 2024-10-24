import type {Meta, StoryObj} from '@storybook/react';

import MakeMatch from './MakeMatch';

const meta: Meta<typeof MakeMatch> = {
  tags: ['autodocs'],
  component: MakeMatch,
};

export default meta;
type Story = StoryObj<typeof MakeMatch>;

export const MakeMatchStories: Story = {
  render: () => (
    // <Box display={'flex'} flexDirection={'column'} gap={2}>
    <MakeMatch />
    // </Box>
  ),
};
