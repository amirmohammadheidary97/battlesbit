import Grid from '@mui/material/Grid2';
import type {Meta, StoryObj} from '@storybook/react';

import CircularAchievement from './CircularAchievement';

const meta: Meta<typeof CircularAchievement> = {
  tags: ['autodocs'],
  component: CircularAchievement,
};

export default meta;
type Story = StoryObj<typeof CircularAchievement>;

export const CircularAchievementStories: Story = {
  render: () => (
    <Grid size={12} container spacing={4} justifyContent={'center'} p={2}>
      <Grid size={12}>
        <CircularAchievement isFullWidth isSelected title="achieve 1" />
        <CircularAchievement isFullWidth isSelected title="achieve 2" />
        <CircularAchievement isFullWidth isSelected title="achieve 3" />
      </Grid>
      <Grid size={12}>
        <CircularAchievement
          isFullWidth={false}
          isSelected={false}
          title="achieve 1"
        />
        <CircularAchievement isFullWidth={false} isSelected title="achieve 2" />
      </Grid>
    </Grid>
  ),
};
