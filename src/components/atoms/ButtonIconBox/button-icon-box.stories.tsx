import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import ButtonIconBox from './ButtonIconBox';

const meta: Meta<typeof ButtonIconBox> = {
  tags: ['autodocs'],
  component: ButtonIconBox,
};

export default meta;
type Story = StoryObj<typeof ButtonIconBox>;

export const ButtonIconBoxStories: Story = {
  render: () => (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <ButtonIconBox icon={''} title="Deposit" count={0} />
    </Box>
  ),
};
