// import React, { useEffect } from "react";
// import classes from "./Table.module.css";
// import {$,jQuery} from "jquery";
// // import DUMMY_DATA from "../../util/dummyData";
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import { AiOutlineCloseCircle } from "react-icons/ai";

// const Table = (props) => {
//   const data = props.data;
//   // $.noConflict();
//   // jQuery(document).ready(function ($) {
//   //   $("#people").DataTable();
//   // });
//   // useEffect(() => {
//   //   $(function () {
//   //     $("#people").DataTable({
//   //       paging: false,
//   //       lengthChange: false,
//   //       lengthMenu: [
//   //         [25, 50, -1],
//   //         [25, 50, "All"],
//   //       ],
//   //       searching: false,
//   //       ordering: false,
//   //       info: false,
//   //       autoWidth: false,
//   //       responsive: true,
//   //     });
//   //   });
//   // }, []);
//   if (Object.keys(data).length !== 0) {
//     return (
//       <div className={classes.tableContainer}>
//         {/* <table id="people" class="table table-bordered table-hover">
//           <thead>
//             <tr>
//               <th>Rendering engine</th>
//               <th>Browser</th>
//               <th>Platform(s)</th>
//               <th>Engine version</th>
//               <th>CSS grade</th>
//             </tr>
//           </thead>
//         </table> */}
//         <table className={classes.table}>
//           <thead>
//             <tr>
//               <th>{props.header1}</th>
//               <th>{props.header2}</th>
//               <th>{props.header3}</th>
//               <th>{props.header4}</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.orderNumber}</td>
//                 <td>{item.name}</td>
//                 <td>{item.orderAmount}</td>
//                 <td>
//                   {item.isPaid === "yes" ? (
//                     <div>
//                       Платена:
//                       <AiOutlineCheckCircle />
//                     </div>
//                   ) : (
//                     <div>
//                       Платена:
//                       <AiOutlineCloseCircle />
//                     </div>
//                   )}
//                   {item.invoice === "yes" ? (
//                     <div>
//                       Фактура:
//                       <AiOutlineCheckCircle />
//                     </div>
//                   ) : (
//                     <div>
//                       Фактура:
//                       <AiOutlineCloseCircle />
//                     </div>
//                   )}
//                   {item.newClient === "yes" ? (
//                     <div>
//                       Нов клиент:
//                       <AiOutlineCheckCircle />
//                     </div>
//                   ) : (
//                     <div>
//                       Нов клиент:
//                       <AiOutlineCloseCircle />
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// };

// export default Table;

import * as React from "react";
import { useEffect, useCallback, useState } from "react";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import dummyData from "../../util/dummyData";
import FilterList from "../FilterList/FilterList";
import classes from "./Table.module.css";

const Component = () => {
  const initialFilters = ["isPaid", "newClient"];

  const [data, setData] = useState({
    nodes: [],
  });

  let DummyData = { dummyData };

  // const [isHide, setHide] = useState(false);

  // DummyData = {
  //   nodes: isHide ? data.nodes.filter((node) => !node.newClient) : data.nodes,
  // };
  // initial fetching

  const doGet = useCallback(async (params) => {
    setData(await DummyData(params));
  }, []);

  useEffect(() => {
    doGet({
      filters: initialFilters,
    });
  }, [doGet]);

  // features

  const [filters, setFilters] = useState(initialFilters);

  const handleFilter = (filter) => {
    filters.includes(filter)
      ? setFilters(filters.filter((value) => value !== filter))
      : setFilters(filters.concat(filter));
  };

  useEffect(() => {
    const params = {
      filters,
    };

    doGet(params);
  }, [filters]);

  //state za filter

  return (
    <>
      {/* <div>
        <label htmlFor="setup">
          <FilterList handleFilter={handleFilter} />
        </label>
      </div> */}

      {/* <div>
        <label htmlFor="newClient">
          Нов клиент:
          <input
            id="learn"
            type="checkbox"
            checked={filters.includes("newClient")}
            onChange={() => handleFilter("newClient")}
            // checked={isHide}
            // onChange={() => setHide(!isHide)}
          />
        </label>
      </div> */}
      {/* <div>
        <label htmlFor="learn">
          Начин на плащане:
          <input
            id="learn"
            type="checkbox"
            checked={filters.includes("LEARN")}
            onChange={() => handleFilter("LEARN")}
          />
        </label>
      </div> */}
      <br />

      <Table data={data}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Номер на поръчката</HeaderCell>
                <HeaderCell>Име на клиент</HeaderCell>
                <HeaderCell>Сума на поръчката</HeaderCell>
                <HeaderCell>Характеристики(иконки)</HeaderCell>
              </HeaderRow>
            </Header>

            <Body className={classes.table}>
              {dummyData.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.orderNumber}</Cell>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.orderAmount}</Cell>
                  <Cell>
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
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </>
  );
};

export default Component;
