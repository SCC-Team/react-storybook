import React from "react";
import ReactMultiSelect from "react-select";

import "./index.scss";

interface SelectProps {
  /**
   * Tipo
   */
  name?: string
  /** 
   * 
  */
  type?: "normal" | "multiselect";
  /**
   * Tipo
   */
  disabled?: true | false;
  /**
   * stilos para el componente
   */
  style?: any
  /** 
   * 
  */
  children?: JSX.Element | Array<JSX.Element>
}

/**
 *
 * Normal: Intput normalmente utilizado para cargar data.
 *
 */

const SelectNormal = ({name, children, disabled = false, ...props}: SelectProps) => {
  return (
    <select name={name} disabled={disabled} {...props}>
      {children}
    </select>
  );
};

export interface DayOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const dayOptions: readonly DayOption[] = [
  { value: "lunes", label: "Lunes", color: "#00B8D9", isFixed: true },
  { value: "martes", label: "Martes", color: "#0052CC", isDisabled: false },
  { value: "miercoles", label: "Miércoles", color: "#5243AA" },
  { value: "jueves", label: "Jueves", color: "#FF5630", isFixed: true },
  { value: "viernes", label: "Viernes", color: "#FF8B00" },
  { value: "sabado", label: "Sábado", color: "#FFC400" },
  { value: "domingo", label: "Domingo", color: "#36B37E" },
];

const MultiSelect = (disabled: boolean = false) => {
  return (
    <div className="flex-container">
      <div>
        <ReactMultiSelect
          isMulti
          name="colors"
          options={dayOptions}
          className="multiselect"
          classNamePrefix="select"
          placeholder="Seleccione"
          isDisabled={disabled}
        />
      </div>
    </div>
  );
};

/**
 *
 * Normal: Se utiliza cuando el usuario pueda seleccionar solamente 1 opción.
 *
 * Normal Disabled: Se utiliza temporalmente hasta que el usuario complete una acción que permita cargar los elementos (por ejemplo seleccionar la ciudad para cargar las comunas).
 * 
 * MultiSelect: Se utiliza cuando al usuario le sea posible seleccionar entre 1 o múltiples opciones.
 * 
 * Multiselect Disabled: Se utiliza temporalmente hasta que el usuario complete una acción que permita cargar los elementos (por ejemplo seleccionar la ciudad para cargar las comunas).
 */
export const Select = ({ children, type = "normal", disabled=false, ...props }: SelectProps) => {
  return type === "normal" ? SelectNormal({ children, disabled, ...props }) : MultiSelect(disabled);
};
