import React from "react";
import ReactModal from 'react-modal';
import { Button } from '../Button';

import "../../sass/main.scss";
import "../../sass/abstracts.scss";

interface ModalProps {
  /**
   * indica si el componente debe mostrarse
   */
  open: boolean
  /**
   * título del modal
   */
  title: string
  /**
   * contenido del modal
   */
  content: string
  /**
   * Botones de acciones
   */
   buttons?: JSX.Element | Array<JSX.Element> 
  /**
   * call back cuando el modal es mandado a cerrar
   */
  onClose?: () => void
}

/**

 */
export const Modal = ({
  open = false,
  buttons,
  title,
  content,
  onClose,
}: ModalProps) => {

  const handleClose = () => {
    onClose && onClose();
  }

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
      className="popUp file-list--popUp"
    >
      <header className="popUp--header">
        <h3 className="popUp--header__title">{title}</h3>
        <button
          className="btn popUp--header__closeButton"
          onClick={handleClose}>
          <span className="icofont-close-circled"></span>
        </button>
      </header>
      <section className="popUp--body">
        <span style={{ display: 'flex', fontSize: '1.2rem', padding: 10 }}>
          {content}
        </span>
        {buttons && (
          <div className="flex-container flex--column flex--center mt-1">
            <div style={{ display: 'flex', gap: '0.5rem' }} className="flex-item flex-item__6 mr-0 mb-0">
              {buttons}
            </div>
          </div>
        )}
      </section>
    </ReactModal>
  );
};
