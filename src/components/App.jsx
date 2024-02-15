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

  //UseEffect
  useEffect(() => {
    //Cuando carga la pagina
    fetchPersons().then((responseData) => {
      setPersons(responseData);
    });
  }, []); //Array cuando cargue la pagina

  //Funciones de eventos
  const handleChangeFilterHouse = (filterHouses) => {
    setFilterHouses(filterHouses);
  };
  //Variables para html

  //Html del return
  const filteredHouse = persons.filter(
    (persons) => persons.house === filterHouses
  );
  return (
    <div className="page">
      <Header />
      <Filters
        filterHouses={filterHouses}
        handleChangeFilterHouse={handleChangeFilterHouse}
      />
      <div className="container">
        <List persons={filteredHouse} />
      </div>
    </div>
  );
}

export default App;
