import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {TimeoutIllustration, RecaptchaErrorIllustration, AccessDeniedIllustration, ServerProblemIllustration, AzureErrorIllustration, LostIllustration} from "@scc/icons"
import IllustrationMessage from '../../components/IllustrationMessage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Components/ErrorMessages',
  component: IllustrationMessage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IllustrationMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IllustrationMessage> = (args) => (
  <IllustrationMessage {...args} />
);

export const TimeoutProblem = Template.bind({});
TimeoutProblem.args = {
  title: 'Su sesión ha expirado',
  illustration: <TimeoutIllustration />,
  description: "Su sesión ha sido cerrada por motivos de seguridad, ya que excedió el tiempo de inactividad. Haga click en volver para renovar su sesión."
};

export const RecaptchaProblem = Template.bind({});
RecaptchaProblem.args = {
  title: 'No se pudo validar reCaptcha',
  illustration: <RecaptchaErrorIllustration />,
  description: "Lo sentimos… Intente nuevamente validar el reCaptcha. Si persiste el problema contacte a su administrador."
};


export const AccessDenied = Template.bind({});
AccessDenied.args = {
  title: 'Acceso Denegado',
  illustration: <AccessDeniedIllustration />,
  description: "Lo sentimos… Usted no tiene un perfil asociado en Suite de Cuadratura Corporativa. Contacte a su administrador para que genere una solicitud de creación de perfil."
};

export const ServerError = Template.bind({});
ServerError.args = {
  title: 'Oops, algo salió mal (Error 500)',
  illustration: <ServerProblemIllustration />,
  description: "Lo sentimos, esto no está funcionando correctamente y estamos trabajando para solucionarlo. Intente nuevamente ingresar a la página o volver en 30 minutos. Si persiste el problema contacte a su administrador indicando que ocurrió un error de código 500"
};

export const AzureError = Template.bind({});
AzureError.args = {
  title: 'Problema con Azure AD',
  illustration: <AzureErrorIllustration />,
  description: "Lo sentimos… Por favor complete la autenticación sin cerrar la ventana emergente, si persiste el problema contacte a su administrador."
};

export const PageNotFound = Template.bind({});
PageNotFound.args = {
  title: 'Oops, parece que te has perdido (Error 404)',
  illustration: <LostIllustration />,
  description: "No podemos encontrar la página que estás buscando. Estos son algunos links útiles que le pueden servir.",
  error404: true
};
