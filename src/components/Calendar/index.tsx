import React, { useState } from "react";
import DatePicker from "react-date-picker";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

interface SelectProps {
  type?: "normal" | "range";
}

/**
 *
 * Normal: Se utiliza para seleccionar una fecha.
 *
 * Range: Se utiliza para seleccionar un rango de fecha.
 *
 */
export const Calendar = ({ type = "normal" }: SelectProps) => {
  const [value, onChange] = useState(new Date);

  const [valueRange, onChangeRange] = useState([
    new Date(), 7,
    (new Date()),
  ]);

  return (
    <div className="flex-container">
             <div>
      {type === "normal" ? (
        <DatePicker onChange={onChange} value={value} />
      ) : (
        <DateRangePicker
          onChange={onChangeRange}
          value={valueRange}
          disableClock={true}
        />
      )}
      </div>
    </div>
  );
};
