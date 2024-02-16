import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import List from "./List";
import PersonDetail from "./PersonDetail";
import { fetchPersons } from "../components/services/fetch";
import { useState, useEffect } from "react";
import ls from "../components/services/localStorage";
import { Routes, Route } from "react-router-dom";

function App() {
  //Variables de estado
  const [persons, setPersons] = useState([]);
  const [filterHouses, setFilterHouses] = useState("Gryffindor");
  const [filterNames, setFilterNames] = useState("");

  //UseEffect
  useEffect(() => {
    fetchPersons().then((responseData) => {
      setPersons(responseData);
      ls.set("persons", responseData);
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

  const findPerson = (id) => {
    return persons.find((persons) => persons.id === id);
  };
  //Html del return
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleChangeFilterName={handleChangeFilterName}
                filterNames={filterNames}
                handleChangeFilterHouse={handleChangeFilterHouse}
                filterHouses={filterHouses}
              />
              <List persons={filtered} />
            </>
          }
        />
        <Route
          path="/person/:id"
          element={<PersonDetail findPerson={findPerson} />}
        />
      </Routes>

      <div className="container" />
      <footer>
        <small>&copy; 2024 Harry Potter Promo Alice</small>
      </footer>
    </div>
  );
}

export default App;
