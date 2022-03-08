import React, { useMemo } from "react";

import "./index.scss";

interface TableProps {
  /**
   * valor que muestra el input
   */
  data: JSX.Element[]
  /**
   * tipo de dato que tendrá la caja de texto
   */
  thead: JSX.Element[]
}

/**

 */
const Table = ({
  data,
  thead,
}: TableProps) => {

  const notFound = () => {
    return (
      <tr>
        <td colSpan={data.length} className="text-center p-13">
          <span className="no-info">No se encontró información</span>
        </td>
      </tr>
    );
  };

  return (
    <div className="tabletemplate--data-table">
      <table>
        <thead>
          <tr>
            {thead.map((head)=>(<>{head}</>))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            <>
              {data.map((row, i)=>(
                <tr key={i + 1}>
                  {row}
                </tr>
              ))}
            </>
          ): notFound() }
        </tbody>
      </table>
    </div>
  );
};

export default Table;