import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KebabMenu } from '../../components/KebabMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/KebabMenu',
  component: KebabMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof KebabMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof KebabMenu> = (args) => <KebabMenu {...args} />;

const Items = [
  'Item 1',
  'Item 2',
  'Item 3'
];

export const Normal = Template.bind({});

Normal.args = {
  items: Items
};
