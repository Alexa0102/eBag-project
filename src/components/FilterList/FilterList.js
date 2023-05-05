import React, { useState } from "react";

import classes from "./FilterList.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const filterData = [
  { id: "dateCreated", name: "ДАТА НА СЪЗДАВАНЕ НА ПОРЪЧКАТА" },
  { id: "dateDelivered", name: "ДАТА НА ДОСАТВЯНЕ НА ПОРЪЧКАТА" },
  {
    id: "paymentMethod",
    name: "НАЧИН НА ПЛАЩАНЕ",
    dropdownOptions: {
      option1: "Карта",
      option2: "Наложен платеж",
      option3: "Фактура",
    },
  },
  {
    id: "isPaid",
    name: "ПЛАТЕНА",
    dropdownOptions: {
      option1: "Да",
      option2: "Не",
    },
  },
  {
    id: "newClient",
    name: "НОВ КЛИЕНТ",
    dropdownOptions: {
      option1: "Да",
      option2: "Не",
    },
  },
];

const FilterList = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const mapOptions = (input) => {
    const dataForMap = Object.values(input);
    return dataForMap.map((option, i) => {
      return <option>{option}</option>;
    });
  };
  const setFilters = (id, value) => {
    props.setFilter({
      ...props.filter,
      [id]: value,
    });
  };
  const MapButtons = () => {
    return filterData.map((currBtn, i) => {
      if (currBtn.dropdownOptions) {
        return (
          <div className={classes.filterButton}>
            <label>{currBtn.name}</label>
            <select
              name={currBtn.id}
              onChange={(e) => setFilters(e.target.name, e.target.value)}
            >
              {mapOptions(currBtn.dropdownOptions)}
            </select>
          </div>
        );
      } else {
        return (
          <div className={classes.filterButton}>
            <label>{currBtn.name}</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        );
      }
    });
  };

  return (
    <div className={classes.filterList}>
      <MapButtons />
    </div>
  );
};

export default FilterList;
