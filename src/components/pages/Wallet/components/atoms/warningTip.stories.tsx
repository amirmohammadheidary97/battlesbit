import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import WarningTip from './WarningTip';

const meta: Meta<typeof WarningTip> = {
  tags: ['autodocs'],
  component: WarningTip,
};

export default meta;
type Story = StoryObj<typeof WarningTip>;

export const WarningTipStories: Story = {
  render: () => (
    <Grid size={12} container justifyContent={'center'} p={2}>
      <Grid size={10}>
        <WarningTip>
          some top here Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero, iure!
        </WarningTip>
      </Grid>
    </Grid>
  ),
};
