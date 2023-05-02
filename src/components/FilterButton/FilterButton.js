import React, { useState } from "react";
import classes from "./FilterButton.module.css";
import { filterData } from "../FilterList/FilterList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterButton = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }
  function isObjectEmpty(filterData) {
    if (filterData.dropdownOptions === undefined) {
      return false;
    }else{
        return Object.keys(filterData.dropdownOptions).length === 0;

    }
  }

  return (
    <>
      <button className={classes.filterButton}>{props.name}</button>
      <div>
        {/* {console.log(Object.keys(filterData[2]))}
        {Object.keys(filterData.dropdownOptions) ? (
          <select value={selectedOption} onChange={handleSelectChange}>
            {filterData.map((option) => {
              return <option value="yes">{option.dropdownOptions}</option>;
            })}
          </select>
        ) : (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        )} */}
        {isObjectEmpty(filterData) ? (
          <select value={selectedOption} onChange={handleSelectChange}>
            {filterData.map((option) => {
              return <option value="yes">{option.dropdownOptions}</option>;
            })}
          </select>
        ) : (
            <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        )}
      </div>
    </>
  );
};

export default FilterButton;
