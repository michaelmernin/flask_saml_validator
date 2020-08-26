import React from "react";
import "../index.css";

function Table(props) {
    return (
      <div className={'container'}>
          <div className={"row"}>
            <li>{props.description + " === " + props.value}</li>

              <thead>
              <tr>
                <th scope="col">Attribute</th>
                <th scope="col">Value</th>
                <th scope="col">Message</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{props.description}</td>
                <td>{props.value}</td>
              </tr>
              </tbody>
          </div>
      </div>
    );

}

export default Table;