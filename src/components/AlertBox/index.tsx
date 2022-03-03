import React, { useState } from "react";
import "../../sass/main.scss";
import "../../sass/abstracts.scss";

interface AlertBoxProps {
  /**
   * color del botón
   */
  color?: "success" | "info" | "warning" | "error";
  /**
   * Contenido de texto
   */
  text: string;
}

/**
 * Success: Utilice este mensaje para comunicar al usuario una operación que resultó exitosa.
 *
 * Info:  Utilice este mensaje para comunicar al usuario alguna información relevante.
 *
 * Warning: Utilice este mensaje para comunicar al usuario algo que puede ser inconveniente.
 *
 * Error: Utilice este mensaje para comunicar al usuario que ha ocurrido algún error.
 */
export const AlertBox = ({
  // size = 'medium',
  color = "success",
  text,
  ...props
}: AlertBoxProps) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {" "}
      {open ? (
        <div className={`alertbox alertbox--${color}`}>
          <div className="alertbox--flex">
            <div className="alertbox--area-icon">
              {color === "success" && <span className="icofont-checked"></span>}
              {color === "info" && (
                <span className="icofont-info-circle"></span>
              )}
              {color === "warning" && <span className="icofont-warning"></span>}
              {color === "error" && (
                <span className="icofont-close-squared-alt"></span>
              )}
            </div>
            <div className="alertbox--area-text">
              <p>{text}</p>
            </div>
            <div className="alertbox--close">
              <span
                className="alertbox--area-close"
                onClick={() => setOpen(!open)}
              >
                <span className="icofont-close"></span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
