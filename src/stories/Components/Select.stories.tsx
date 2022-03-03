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

export const Normal = Template.bind({});
Normal.args = {
    type: 'normal',
    disabled: false
};

export const NormalDisabled = Template.bind({});
NormalDisabled.args = {
    type: 'normal',
    disabled: true
};

export const Multiselect = Template.bind({});
Multiselect.args = {
    type: 'multiselect',
    disabled: false
};

export const MultiselectDisabled = Template.bind({});
MultiselectDisabled.args = {
    type: 'multiselect',
    disabled: true
};