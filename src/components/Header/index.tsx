import React from "react";

import Breadcrumbs, { BreadcrumbsLinksTypes  } from "../Breadcrumbs";

import "./index.scss";

interface HeaderProps {
  /**
   * arreglo con los titulos que mostrará
   */
   title: string
  /**
   * arreglo con los titulos que mostrará
   */
   crumbs?: Array<BreadcrumbsLinksTypes>,
   /**
   * call back cuando el usuario haga click en uno de las migas
   */
  onSelect?: (index: number) => void
}

/**

 */
export const Header = ({
  title,
  crumbs,
  onSelect
}: HeaderProps) => {

  const handleChange = (index: number) => {
    onSelect && onSelect(index);
  }

  return (
    <header className="account--page-title p-1 pb-0">
      <div className="flex-container flex--spaceBetween">
        <div className="flex-item flex-item__18 mb-0 mr-0">
          <h1 className="mb-1">{title}</h1>
          <Breadcrumbs crumbs={crumbs} onSelect={handleChange} />
        </div>
      </div>
    </header>
  );
};
