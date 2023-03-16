import React from "react";
import AlertaComponent from "./AlertaComponent";

const TablaComponent = (props) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          {props.headers.map((value) => (
            <th>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.body.map((tr) => (
          <tr>
            {tr.map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaComponent;
