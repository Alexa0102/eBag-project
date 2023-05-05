import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Table from "./components/Table/Table";
import { useState, React, useEffect } from "react";

import DUMMY_DATA from "./util/dummyData";

function App() {
  //state za data
  const [data, setData] = useState({});
  const [filter, setFilter] = useState({isPaid:"Да",newClient:'Да',paymentMethod:"Карта"});
  //state za filter

  useEffect(() => {
    setData(DUMMY_DATA);
    console.log(filter)
  }, []);

  //if proverka

  return (
    <div className="App">
      <NavBar setFilter={setFilter} filter={filter}/>
      <Table
        header1="Номер на поръчката"
        header2="Име на клиент"
        header3="Сума на поръчката"
        header4="Характеристики(иконки)"
        data={data}
      />
    </div>
  );
}

export default App;
