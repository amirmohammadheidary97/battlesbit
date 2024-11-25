import type {Meta, StoryObj} from '@storybook/react';

import MatchResultBadgeContainer from './MatchResultBadgeContainer';

const meta: Meta<typeof MatchResultBadgeContainer> = {
  tags: ['autodocs'],
  component: MatchResultBadgeContainer,
};

export default meta;
type Story = StoryObj<typeof MatchResultBadgeContainer>;

export const MatchResultBadgeContainerStories: Story = {
  render: () => (
    <MatchResultBadgeContainer achivements={2} lastGames={['lose', 'win']} />
  ),
};
