import React, { useState } from "react";
import classes from "./SearchBar.module.css";

import { BiSearch, BiXCircle } from "react-icons/bi";

const SearchBar = ({ data }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const filterHandler = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.name 
          .toLowerCase()
          .trim("")
          .includes(searchWord.toLowerCase().trim("")) ||
        value.orderNumber
          .toLowerCase()
          .trim("")
          .includes(searchWord.toLowerCase().trim("")) ||
        value.orderAmount
          .toLowerCase()
          .trim("")
          .includes(searchWord.toLowerCase().trim(""))
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  // useEffect(() => {
  //   let regex = /^[a-zA-Z',.\s-]{1,25}$/g
  //   regex.test(wordEntered)
  // }, [wordEntered])

  const clearInputHandler = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={classes.searchContainer}>
      {!isSearchOpen ? (
        <button className={classes.icon} onClick={toggleSearch}>
          <BiSearch size={25} />
        </button>
      ) : (
        ""
      )}
      {isSearchOpen && (
        <div className={classes.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            value={wordEntered}
            onChange={filterHandler}
          />
          <div className={classes.closeIcon}>
            <BiXCircle color="white" onClick={clearInputHandler} />
          </div>
          <div className={classes.searchIcon}>
            <BiSearch onClick={toggleSearch} color="white" size={20} />
          </div>
        </div>
      )}
      {filteredData.length !== 0 && (
        <div className={classes.dataResult}>
          {filteredData.slice(0, 15).map((value) => {
            //   <Link onClick={clearInputHandler} className={classes.dataItem} to={`/catalog/${value.name.toLowerCase()}`}>
              <p>{value.name}</p>
            // </Link>
            return (
              <div onClick={clearInputHandler} className={classes.dataItem}>
                {value.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
