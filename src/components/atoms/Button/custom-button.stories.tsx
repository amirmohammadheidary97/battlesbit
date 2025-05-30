import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Button
        onClick={() => {}}
        color="success"
        content="Test"
        fontSize="14px"
        fontWeight={400}
        variant="contained"
        backgroundColor="primary"
        textColor="#000"
      />
    </Box>
  ),
};
