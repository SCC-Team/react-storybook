import React from "react";
import "../../sass/main.scss";
import "../../sass/abstracts.scss";

interface ButtonProps {
  /**
   * color del botón
   */
  color?: "primary" | "secondary" | "disabled" | "loading";
  /**
   * Tamaño?
   */
  // size?: 'small' | 'medium' | 'large';
  /**
   * Contenido de texto
   */
  text: string;
}

/**
 * 
 * Primary: Llamado a la acción necesario para que el usuario pueda continuar su flujo en la aplicación.
 * 
 * Secondary: Representa una acción secundaria que representa una ayuda que no es obligatoria.
 * 
 * Disabled: Se utiliza temporalmente hasta que se completen acciones requeridas.
 * 
 * Loading: Se utiliza cuando se está a la espera de completar una acción ejecutándose en segundo plano.
 */
export const Button = ({
  // size = 'medium',
  color = "primary",
  text,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${color}`} {...props}>
      {color === "loading" && (
        <span className="container">
          <span className="icofont-spinner rotation-animation"></span>
        </span>
      )}
      {text}
    </button>
  );
};
