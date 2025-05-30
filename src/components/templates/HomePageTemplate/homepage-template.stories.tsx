import type {Meta, StoryObj} from '@storybook/react';

import {HomePageTemplate} from './HomePageTemplate';

const meta: Meta<typeof HomePageTemplate> = {
  tags: ['autodocs'],
  component: HomePageTemplate,
};

export default meta;
type Story = StoryObj<typeof HomePageTemplate>;

export const HomePageTemplateStories: Story = {
  render: () => <HomePageTemplate />,
};
