import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Calendar } from '../../components/Calendar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Calendar',
  component: Calendar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Calendar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args}  />;

export const Normal = Template.bind({});
Normal.args = {
    type: 'normal',
};

export const Range = Template.bind({});
Range.args = {
    type: 'range',
};
