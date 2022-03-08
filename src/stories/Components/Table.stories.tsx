import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from '../../components/Table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const Thred = [
  <th>Nombre</th>,
  <th>Apellido</th>,
  <th>Email</th>,
  <th>Usuario</th>,
  <th>Fecha Creación</th>
];

const Data = [
  <>
    <td>Juan</td>
    <td>Perez</td>
    <td>jperez@main.com</td>
    <td>@jperez</td>
    <td>2 de abril de 2019</td>
  </>,
  <>
    <td>Miguel</td>
    <td>Ferrada</td>
    <td>mferrada@main.com</td>
    <td>@mferrada</td>
    <td>5 de abril de 2019</td>
  </>,
  <>
    <td>Fernando</td>
    <td>Sepulveda</td>
    <td>fsepulveda@main.com</td>
    <td>@fsepulveda</td>
    <td>19 de junio de 2020</td>
  </>,
  <>
    <td>Hector</td>
    <td>Blanco</td>
    <td>hblanco@main.com</td>
    <td>@hblanco</td>
    <td>19 de enero de 2020</td>
  </>,
];

export const Normal = Template.bind({});
Normal.args = {
   thead: Thred,
   data: Data
};
