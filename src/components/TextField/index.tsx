import React, { useMemo } from "react";

import "./index.scss";

interface TextFieldProps {
  /**
   * valor que muestra el input
   */
  value?: string
  /**
   * tipo de dato que tendrá la caja de texto
   */
   type?: "text" | "number"
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
  type = 'text',
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
      'input-root',
      ...(error && ['error'] || []),
      ...(disabled && ['disabled'] || []),
      ...(fullWidth && ['input-root--fullwidth'] || []),
    ].join(' ');
    return classes;
  }, [error, disabled, fullWidth]);

  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};
