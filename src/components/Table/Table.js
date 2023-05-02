import React from "react";
import classes from "./Table.module.css";
import DUMMY_DATA from "../../util/dummyData";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Table = (props) => {
  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <tr>
          <th>{props.header1}</th>
          <th>{props.header2}</th>
          <th>{props.header3}</th>
          <th>{props.header4}</th>
        </tr>
        <tbody>
          {DUMMY_DATA.map((item, index) => (
            <tr key={index}>
              <td>{item.orderNumber}</td>
              <td>{item.name}</td>
              <td>{item.orderAmount}</td>
              <td>
                {item.isPaid === "yes" ? (
                  <div>
                    Платена:
                    <AiOutlineCheckCircle />
                  </div>
                ) : (
                  <div>
                    Платена:
                    <AiOutlineCloseCircle />
                  </div>
                )}
                {item.invoice === "yes" ? (
                  <div>
                    Фактура:
                    <AiOutlineCheckCircle />
                  </div>
                ) : (
                  <div>
                    Фактура:
                    <AiOutlineCloseCircle />
                  </div>
                )}
                {item.newClient === "yes" ? (
                  <div>
                    Нов клиент:
                    <AiOutlineCheckCircle />
                  </div>
                ) : (
                  <div>
                    Нов клиент:
                    <AiOutlineCloseCircle />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
