import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   open: true,
   title: 'Título del modal',
   content: '¿Quieres guardar los cambios?',
   buttons: <>
     <Button color="secondary" text="cancelar" />
     <Button color="primary" text="Guardar" icon={<span className="icofont-save"></span>} />
  </>
};

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   text: 'Botón',
// };
