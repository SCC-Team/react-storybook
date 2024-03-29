import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Breadcrumbs, { BreadcrumbsLinksTypes } from '../../components/Breadcrumbs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/Breadcrumbs',
  component: Breadcrumbs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Breadcrumbs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

const MockData: BreadcrumbsLinksTypes[] = [
  { name: 'Inicio', uri: '#home' },
  { name: 'Segundo Nivel', uri: '#leveltwo' },
  { name: 'Tercer Nivel', uri: '#leveltree' }
];

export const Normal = Template.bind({});
Normal.args = {
  crumbs: MockData
};
