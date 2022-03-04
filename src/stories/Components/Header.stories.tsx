import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../../components/Header';
import { BreadcrumbsLinksTypes } from '../../components/Breadcrumbs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const MockData: BreadcrumbsLinksTypes[] = [
  { name: 'Inicio', uri: '#home' },
  { name: 'Segundo Nivel', uri: '#leveltwo' },
  { name: 'Tercer Nivel', uri: '#leveltree' }
];

export const Normal = Template.bind({});
Normal.args = {
   title: 'Inicio',
   crumbs: MockData
};
