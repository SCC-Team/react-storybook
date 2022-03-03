import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from '../../components/TextField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Input',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   value: 'Caja de texto'
};

export const Error = Template.bind({});
Error.args = {
   value: 'Caja de texto',
   error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
   value: 'Caja de texto'
};