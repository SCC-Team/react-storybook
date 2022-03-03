import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '../../components/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args}  />;

const mockSelectOptions = ['seleccione', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

export const Normal = Template.bind({});
Normal.args = {
    type: 'normal',
    disabled: false,
    children: mockSelectOptions.map((item, index)=><option key={index} value={index}>{item}</option>),
};

export const NormalDisabled = Template.bind({});
NormalDisabled.args = {
    type: 'normal',
    disabled: true,
    children: mockSelectOptions.map((item, index)=><option key={index} value={index}>{item}</option>),
};

export const Multiselect = Template.bind({});
Multiselect.args = {
    type: 'multiselect',
    disabled: false,
    children: mockSelectOptions.map((item, index)=><option key={index} value={index}>{item}</option>),
};

export const MultiselectDisabled = Template.bind({});
MultiselectDisabled.args = {
    type: 'multiselect',
    disabled: true,
    children: mockSelectOptions.map((item, index)=><option key={index} value={index}>{item}</option>),
};