import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartPie, ChartLine } from '../../components/Charts';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Charts',
  component: ChartPie,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ChartPie>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChartPie> = (args) => <ChartPie {...args} />;
const TemplateLine: ComponentStory<typeof ChartPie> = (args) => <ChartLine {...args} />;

export const Pie = Template.bind({});
Pie.args = {
  width: 200,
  height: 200,
  donut: true,
  data: [20, 40, 60],
};

export const Line = TemplateLine.bind({});
TemplateLine.args = {
  width: 200,
  height: 200,
  donut: true,
  data: [20, 40, 60],
};