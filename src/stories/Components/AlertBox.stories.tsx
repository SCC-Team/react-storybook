import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AlertBox } from '../../components/AlertBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/AlertBox',
  component: AlertBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof AlertBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AlertBox> = (args) => <AlertBox {...args} />;


export const Success = Template.bind({});
Success.args = {
  color: 'success',
  text: 'Utilice este mensaje para comunicar al usuario una operación que resultó exitosa.'
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
  text: 'Utilice este mensaje para comunicar al usuario alguna información relevante.',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  text: 'Utilice este mensaje para comunicar al usuario algo que puede ser inconveniente.',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  text: 'Utilice este mensaje para comunicar al usuario que ha ocurrido algún error.',
};
