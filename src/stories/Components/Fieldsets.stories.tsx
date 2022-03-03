import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Fieldsets } from '../../components/Fieldsets';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Breadcrumbs',
  component: Fieldsets,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Fieldsets>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Fieldsets> = (args) => <Fieldsets {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   label: 'Inicio',
   children: <span>Hola</span>
};
