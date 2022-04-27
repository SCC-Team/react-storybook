import React from 'react';
import './index.scss';
import {ArrowLeftSolid} from "@scc/icons"

interface IllustrationProps {
  
  title: string,
  illustration: any,
  description?: string,
  error404?: boolean
}


const IllustrationMessage = ({
    title,
    illustration,
    description,
    error404
}: IllustrationProps) => {
  

  return (
    <div className="main-container">
      <div className="illustration">
        <div className="content-container">
            <h1 className="illustration-title">{title}</h1>
            <div className="image-container">{illustration}</div>
            <p className="description">{description}</p>
            <button className="btn btn-primary"><ArrowLeftSolid className="mx-1"/> Volver</button>
        </div>
      </div>
    </div>
  );
};

export default IllustrationMessage;
