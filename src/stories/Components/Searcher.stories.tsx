import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Searcher } from '../../components/Searcher';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Buscador',
  component: Searcher,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Searcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Searcher> = (args) => <Searcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    withPaginate: false,
};

