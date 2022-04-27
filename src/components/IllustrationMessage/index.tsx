import React from 'react';
import './index.scss';
import {ArrowLeftSolid} from '@scc/icons';

interface IllustrationProps {
  title: string;
  illustration: any;
  description?: string;
  error404?: boolean;
}

const IllustrationMessage = ({
  title,
  illustration,
  description,
  error404,
}: IllustrationProps) => {
  return (
    <div className="main-container">
      <div className="illustration">
        <div className="main-content-container">
          <div className="content-container left-section">
            <h1 className="illustration-title">{title}</h1>
            <p className="description">{description}</p>
            {error404 && <div className="redirect-container">
            <a className="redirect-link"><i className="icofont-dashboard-web"></i> Home</a>
            <a className="redirect-link"><i className="icofont-gear-alt"></i> Configuración</a>
            <a className="redirect-link"><i className="icofont-pie-chart"></i> Conciliación</a>
            <a className="redirect-link"><i className="icofont-money"></i> Recaudación</a>
            <a className="redirect-link"><i className="icofont-user-alt-3"></i> Mi Cuenta</a>
            </div>}
            <button className="btn btn-primary back-btn">
              <span ><ArrowLeftSolid className="arrow-icon" /></span> Volver
            </button>
          </div>
          <div className="content-container">
            <div className="image-container">{illustration}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationMessage;
