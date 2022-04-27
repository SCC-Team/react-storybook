import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {TimeoutIllustration} from "@scc/icons"
import IllustrationMessage from '../../components/IllustrationMessage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/IllustrationMessage',
  component: IllustrationMessage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IllustrationMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IllustrationMessage> = (args) => (
  <IllustrationMessage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  title: 'Su sesión ha expirado',
  illustration: <TimeoutIllustration />,
  description: "Su sesión ha sido cerrada por motivos de seguridad, ya que excedió el tiempo de inactividad. Haga click en volver para renovar su sesión."
};
