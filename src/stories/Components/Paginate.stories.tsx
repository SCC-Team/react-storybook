import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paginate } from '../../components/Paginate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Paginate',
  component: Paginate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Paginate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paginate> = (args) => <Paginate {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   data: [...((Array(50).map((item)=>(`${item} row`))))],
};
