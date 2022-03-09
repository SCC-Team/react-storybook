import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Fieldsets } from '../../components/Fieldsets';
import { Input } from '../../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Fieldsets',
  component: Fieldsets,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Fieldsets>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Fieldsets> = (args) => <Fieldsets {...args} />;

const Mockup = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2}}>
      <Input placeholder="Nombre" value='' />
      <Input placeholder="Apellido" value='' />
    </div>
  );
}

export const Normal = Template.bind({});
Normal.args = {
   label: 'Datos personales',
   children: <Mockup />
};
