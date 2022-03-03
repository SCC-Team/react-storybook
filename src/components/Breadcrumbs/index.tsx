import React from "react";

import "../../sass/main.scss";
import "../../sass/abstracts.scss";

interface BreadcrumbsProps {
  /**
   * arreglo con los titulos que mostrará
   */
   values?: Array<string>
   /**
   * call back cuando el usuario haga click en uno de las migas
   */
  onSelect?: (index: number) => void
}

/**

 */
export const Breadcrumbs = ({
  values,
  onSelect
}: BreadcrumbsProps) => {

  const handleChange = (index: number) => {
    onSelect && onSelect(index);
  }

  return (
    <>
      <nav className="breadcrumbs">
        {values?.map((value, index)=>{
          if (index+1===values.length) { // last item
            return (
              <span className="breadcrumbs active">
                {value}
              </span>
            ); 
          }
          return (
            <div onClick={() => handleChange(index)}>
              {value} <span className="icofont-simple-right"></span>
            </div>
          );
        })}
      </nav>
    </> 
  );
};
