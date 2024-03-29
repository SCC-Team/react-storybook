import React from "react";

import "../../sass/main.scss";
import "../../sass/abstracts.scss";

export interface BreadcrumbsLinksTypes {
  name: string
  uri: string
}

interface BreadcrumbsProps {
  /**
   * arreglo con los titulos que mostrará
   */
  crumbs?: Array<BreadcrumbsLinksTypes>
   /**
   * call back cuando el usuario haga click en uno de las migas
   */
  onSelect?: (index: number) => void
}

/**

 */
const Breadcrumbs = ({
  crumbs,
  onSelect
}: BreadcrumbsProps) => {

  const handleChange = (index: number) => {
    onSelect && onSelect(index);
  }

  return (
    <>
      <nav className="breadcrumbs">
        {crumbs?.map(({ name, uri }, index)=>{
          if (index+1===crumbs.length) { // last item
            return (
              <span key={index} className="breadcrumbs active">
                {name}
              </span>
            ); 
          }
          return (
            <a key={index} href={uri} onClick={() => handleChange(index)}>
              {name} <span className="icofont-simple-right"></span>
            </a>
          );
        })}
      </nav>
    </> 
  );
};

export default Breadcrumbs;
