import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  text: 'Botón Primario',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  text: 'Botón Secundario',
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'disabled',
  text: 'Botón Deshabilitado',
};

export const loading = Template.bind({});
loading.args = {
  color: 'loading',
  text: 'Botón Cargando',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   text: 'Botón',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   text: 'Botón',
// };
