import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import List from "./List";
import PersonDetail from "./PersonDetail";
import { fetchPersons } from "../components/services/fetch";
import { useState, useEffect } from "react";
import ls from "../components/services/localStorage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function App() {
  //Variables de estado
  const [persons, setPersons] = useState([]);
  const [selectHouses, setSelectHouses] = useState("Gryffindor");
  const [inputName, setinputName] = useState("");

  //UseEffect
  useEffect(() => {
    fetchPersons().then((responseData) => {
      setPersons(responseData);
      ls.set("persons", responseData);
    });
  }, []);

  //Funciones de eventos
  const handleChangeFilterHouse = (selectHouses) => {
    setSelectHouses(selectHouses);
  };

  const handleChangeFilterName = (inputName) => {
    setinputName(inputName);
  };

  //Variables para html
  const filtered = persons
    .filter((person) =>
      person.name.toLowerCase().includes(inputName.toLowerCase())
    )
    .filter((person) => person.house === selectHouses);

  const findPerson = (id) => {
    return persons.find((persons) => persons.id === id);
  };
  //Html del return
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleChangeFilterName={handleChangeFilterName}
                  inputName={inputName}
                  handleChangeFilterHouse={handleChangeFilterHouse}
                  selectHouses={selectHouses}
                  persons={filtered}
                />
                <div>
                  {filtered.length > 0 ? (
                    <List persons={filtered} />
                  ) : (
                    <p>
                      No existe ningún personaje con el nombre {inputName}¡¡¡
                    </p>
                  )}
                </div>
              </>
            }
          />
          <Route
            path="/person/:id"
            element={<PersonDetail findPerson={findPerson} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <div className="container" />
      </main>
      <footer>
        <small>&copy; 2024 Harry Potter Promo Alice</small>
      </footer>
    </div>
  );
}

export default App;
