import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextNormal = Template.bind({});
TextNormal.args = {
   value: 'Caja de texto'
};

export const TextInvalid = Template.bind({});
TextInvalid.args = {
   value: 'Caja de texto',
   error: true,
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
   value: 'Caja de texto',
   disabled: true,
};

export const NumberNormal = Template.bind({});
NumberNormal.args = {
   value: '9999',
   type: 'number'
};

export const NumberInvalid = Template.bind({});
NumberInvalid.args = {
   value: '9999',
   type: 'number',
   error: true,
};

export const NumberDisabled = Template.bind({});
NumberDisabled.args = {
   value: '9999',
   type: 'number',
   disabled: true,
};


export const HourNormal = Template.bind({});
HourNormal.args = {
   value: '12:30',
   type: 'time',
};

export const HourInvalid = Template.bind({});
HourInvalid.args = {
   value: '12:30',
   type: 'time',
   error: true,
};

export const HourDisabled = Template.bind({});
HourDisabled.args = {
   value: '12:30',
   type: 'time',
   disabled: true,
};