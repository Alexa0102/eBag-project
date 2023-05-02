import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Table
        header1="Номер на поръчката"
        header2="Име на клиент"
        header3="Сума на поръчката"
        header4="Характеристики(иконки)"
      />
    </div>
  );
}

export default App;
