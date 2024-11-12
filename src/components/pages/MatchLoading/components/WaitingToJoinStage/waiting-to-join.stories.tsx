import type {Meta, StoryObj} from '@storybook/react';

import WaitingToJoinStage from './WaitingToJoin';

const meta: Meta<typeof WaitingToJoinStage> = {
  tags: ['autodocs'],
  component: WaitingToJoinStage,
};

export default meta;
type Story = StoryObj<typeof WaitingToJoinStage>;

export const WaitingToJoinStageStories: Story = {
  render: () => <WaitingToJoinStage />,
};
