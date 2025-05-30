import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import SectionTitle from './SectionTitle';

const meta: Meta<typeof SectionTitle> = {
  tags: ['autodocs'],
  component: SectionTitle,
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const SectionTitleStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <SectionTitle title="Section Title" link="Section Link" linkText="More" />
    </Box>
  ),
};
