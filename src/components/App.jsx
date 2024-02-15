import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import List from "./List";
import { fetchPersons } from "../components/services/fetch";
import { useState, useEffect } from "react";

function App() {
  //Variables de estado
  const [persons, setPersons] = useState([]);
  const [filterHouses, setFilterHouses] = useState("Gryffindor");
  const [filterNames, setFilterNames] = useState("");

  //UseEffect
  useEffect(() => {
    fetchPersons().then((responseData) => {
      setPersons(responseData);
    });
  }, []);

  //Funciones de eventos
  const handleChangeFilterHouse = (filterHouses) => {
    setFilterHouses(filterHouses);
  };

  const handleChangeFilterName = (filterNames) => {
    setFilterNames(filterNames);
  };

  //Variables para html
  const filtered = persons
    .filter((person) =>
      person.name.toLowerCase().includes(filterNames.toLowerCase())
    )
    .filter((person) => person.house === filterHouses);

  //Html del return
  return (
    <div className="page">
      <Header />
      <Filters
        handleChangeFilterName={handleChangeFilterName}
        filterNames={filterNames}
        handleChangeFilterHouse={handleChangeFilterHouse}
        filterHouses={filterHouses}
      />
      <div className="container">
        <List persons={filtered} />
      </div>
    </div>
  );
}

export default App;
