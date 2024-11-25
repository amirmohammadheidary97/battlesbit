import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import {HeaderConfirmation} from './HeaderConfirmation';

const meta: Meta<typeof HeaderConfirmation> = {
  tags: ['autodocs'],
  component: HeaderConfirmation,
};

export default meta;
type Story = StoryObj<typeof HeaderConfirmation>;

export const HeaderConfirmationStories: Story = {
  render: () => (
    <Grid size={12} padding={'0px 20px'}>
      <HeaderConfirmation onClose={() => {}} />
    </Grid>
  ),
};
