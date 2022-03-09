import React, { useMemo } from "react";
import "../../sass/main.scss";
import "../../sass/abstracts.scss";

interface ButtonProps {
  /**
   * color del botón
   */
  color?: "primary" | "secondary" | "danger";
  /**
   * desactiva el botón
   */
  disabled?: boolean
  /**
   * desactiva el botón
   */
  loading?: boolean
  /**
   * Tamaño
   */
  size?: 'small' | 'normal';
  /**
   * Contenido de texto
   */
  text: string;
  /**
   * Icono que se mostrará en el botón de la librería https://icofont.com/icons
   */
  icon?: JSX.Element;
  /**
   * Función que es ejecutada cuando el usuario hace click sobre el componente
   */
  onClick?: () => void
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
  disabled = false,
  loading = false,
  size = 'normal',
  icon,
  text,
  ...props
}: ButtonProps) => {

  const className = useMemo(()=>{
    const classes = [
      'btn',
      ...(disabled && ['btn-disabled'] || []),
      ...(loading && ['btn-loading'] || []),
      ...(color && [`btn-${color}`] || []),
      ...( size && [`btn-${size}`] )
    ].join(' ');
    return classes;
  }, [disabled, loading, color]);

  return (
    <button type="button" disabled={disabled} className={className} {...props}>
      {loading ? (
        <span className="container">
          <span className="icofont-spinner rotation-animation"></span>
        </span>
      ) : (
        <>
          {((icon || '') !== '') && (
            <span className="container">
              {icon}
            </span>
          )}
        </>
      )}
      {text}
    </button>
  );
};
