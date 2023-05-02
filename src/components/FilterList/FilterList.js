import React, { useState } from "react";
import FilterButton from "../FilterButton/FilterButton";
import classes from "./FilterList.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }

  // return (
  // <div>

  //     <select value={selectedOption} onChange={handleSelectChange}>
  //       <option value="yes">Карта</option>
  //       <option value="no">Наложен платеж</option>
  //       <option value="no">Фактура</option>

  //     </select>

  // </div>
  // );
}

export const filterData = [
  { id: "dateCreated", name: "Дата на създаване на поръчката" },
  { id: "dateDelivered", name: "Дата на доставяне на поръчката" },
  {
    id: "paymentMethod",
    name: "Начин на плащане",
    dropdownOptions: {
      option1: "Карта",
      option2: "Наложен платеж",
      option3: "Фактура",
    },
  },
  {
    id: "isPaid",
    name: "Платена",
    dropdownOptions: {
      option1: "Да",
      option2: "Не",
    },
  },
  {
    id: "newClient",
    name: "Нов клиент",
    dropdownOptions: {
      option1: "Да",
      option2: "Не",
    },
  },
];
const FilterList = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);


  return (
    <div className={classes.filterList}>
      {filterData.map((filter) => (
        <div key={filter.id}>
          <FilterButton
            name={filter.name}
            id={filter.id}
          />

          {/* {filter.name === "Дата на създаване на поръчката" ? (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          ) : null}
          {filter.name === "Дата на доставяне на поръчката" ? (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          ) : null} */}
        </div>
      ))}
    </div>
  );
};

export default FilterList;
