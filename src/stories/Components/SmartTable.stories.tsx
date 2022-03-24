import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SmartTable from "../../components/SmartTable";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI Components/Table",
  component: SmartTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SmartTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SmartTable> = (args) => (
  <SmartTable {...args} />
);

const Thred = [
  {
    title: "Nombre",
    colspan: 1,
    active: true,
    col_id: "name",
  },
  {
    title: "Apellido",
    colspan: 1,
    active: true,
    col_id: "lastname",
  },
  {
    title: "Email",
    colspan: 1,
    active: true,
    col_id: "email",
  },
  {
    title: "Usuario",
    colspan: 1,
    active: true,
    col_id: "user",
  },
  {
    title: "Fecha Creacion",
    colspan: 1,
    active: true,
    col_id: "createdAt",
  },
];

const Data = [
  {
    name: "Juan",
    lastname: "Perez",
    email: "Jperez@Main.Com",
    user: "@Jperez",
    createdAt: "2 de Abril de 2019",
  },
  {
    name: "Juan",
    lastname: "Perez",
    email: "Jperez@Main.Com",
    user: "@Jperez",
    createdAt: "2 de Abril de 2019",
  },
  {
    name: "Juan",
    lastname: "Perez",
    email: "Jperez@Main.Com",
    user: "@Jperez",
    createdAt: "2 de Abril de 2019",
  },
  {
    name: "Juan",
    lastname: "Perez",
    email: "Jperez@Main.Com",
    user: "@Jperez",
    createdAt: "2 de Abril de 2019",
  },
  {
    name: "Juan",
    lastname: "Perez",
    email: "Jperez@Main.Com",
    user: "@Jperez",
    createdAt: "2 de Abril de 2019",
  },
];

export const Normal = Template.bind({});
Normal.args = {
  thead: Thred,
  items: Data,
};

export const CustomColumns = Template.bind({});
CustomColumns.args = {
  customColumns: true,
  thead: Thred,
  items: Data,
};

export const customDensity = Template.bind({});
customDensity.args = {
  customDensity: true,
  thead: Thred,
  items: Data,
};
