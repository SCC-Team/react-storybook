import React from "react";

import "../../sass/main.scss";
import "../../sass/abstracts.scss";

interface FieldsetsProps {
  /**
   * arreglo con los titulos que mostrará
   */
   label?: string
   /**
   * call back cuando el usuario haga click en uno de las migas
   */
  children: JSX.Element | Array<JSX.Element>
}

/**

 */
export const Fieldsets = ({
  label,
  children
}: FieldsetsProps) => {

  return (
    <fieldset className="flex-container m-1">
      <legend>{label}</legend>
      <div className="flex-item mt-1 mb-0">
        {children}
      </div>
    </fieldset>
  );
};
