import type {Preview} from '@storybook/react';
import {ThemeProviderDecorator} from './ThemeDecorator';
import {RouterProviderDecorator} from './RouterDecorator';
import {UrqlDecorator} from './UrqlDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
export const decorators = [ThemeProviderDecorator, RouterProviderDecorator, UrqlDecorator];
