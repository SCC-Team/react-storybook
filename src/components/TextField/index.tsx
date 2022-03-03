import React, { useMemo } from "react";

import "../../sass/main.scss";
import "../../sass/abstracts.scss";
import "./index.scss";

interface TextFieldProps {
  /**
   * valor que muestra el input
   */
  value?: string
  /**
   * texto que se muestra cuando el input no tiene valor
   */
  placeholder?: string
   /**
   * texto que se muestra cuando el input no tiene valor
   */
  disabled?: boolean
  /**
   * indica si el input debe mostrarse como marcado con error
   */
   fullWidth?: boolean
  /**
   * indica si el input debe mostrarse como marcado con error
   */
  error?: boolean
   /**
   * call back cada vez que el usuario realiza un cambio en la caja de texto
   */
  onChangeText?: (text: string) => void
}

/**

 */
export const TextField = ({
  value,
  placeholder,
  fullWidth,
  disabled = false,
  error = false,
  onChangeText
}: TextFieldProps) => {

  const handleChange = (e: any) => {
    onChangeText && onChangeText(e.target.value);
  }

  const className = useMemo(()=>{
    const classes = [
      ...(error && ['error'] || []),
      ...(disabled && ['disabled'] || []),
      ...(fullWidth && [''] || []),
    ].join(' ');
    return classes;
  }, [error, disabled]);

  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};
