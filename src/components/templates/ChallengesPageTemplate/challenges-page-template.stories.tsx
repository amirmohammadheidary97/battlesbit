import type {Meta, StoryObj} from '@storybook/react';

import {ChallengesPageTemplate} from './ChallengesPageTemplate';

const meta: Meta<typeof ChallengesPageTemplate> = {
  tags: ['autodocs'],
  component: ChallengesPageTemplate,
};

export default meta;
type Story = StoryObj<typeof ChallengesPageTemplate>;

export const ChallengesPageTemplateStories: Story = {
  render: () => <ChallengesPageTemplate />,
};
