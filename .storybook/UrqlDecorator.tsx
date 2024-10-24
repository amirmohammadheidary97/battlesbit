import React from 'react';
import type {Decorator} from '@storybook/react/';
import {URQLProvider} from '../src/providers';

export const UrqlDecorator: Decorator = (Story, context) => (
  <URQLProvider>
    <Story {...context} />
  </URQLProvider>
);
