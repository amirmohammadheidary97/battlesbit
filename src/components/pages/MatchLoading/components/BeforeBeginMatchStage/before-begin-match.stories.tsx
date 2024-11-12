import type {Meta, StoryObj} from '@storybook/react';

import BeforeBeginMatchStage from './BeforeBeginMatchStage';

const meta: Meta<typeof BeforeBeginMatchStage> = {
  tags: ['autodocs'],
  component: BeforeBeginMatchStage,
};

export default meta;
type Story = StoryObj<typeof BeforeBeginMatchStage>;

export const BeforeBeginMatchStageStories: Story = {
  render: () => <BeforeBeginMatchStage />,
};
