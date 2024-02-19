import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import List from "./List";
import PersonDetail from "./PersonDetail";
import { fetchPersons } from "../components/services/fetch";
import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function App() {
  //Variables de estado
  const [persons, setPersons] = useState([]);
  const [selectHouses, setSelectHouses] = useState("Gryffindor");
  const [inputName, setinputName] = useState("");
  const [selectGender, setSelectGender] = useState("all");

  //UseEffect
  useEffect(() => {
    fetchPersons().then((responseData) => {
      const orderData = responseData.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPersons(orderData);
    });
  }, []);

  //Funciones de eventos
  const handleChangeFilterHouse = (selectHouses) => {
    setSelectHouses(selectHouses);
  };

  const handleChangeFilterName = (inputName) => {
    setinputName(inputName);
  };

  const handleChangeFilterGender = (gender) => {
    setSelectGender(gender);
  };

  //Variables para html
  const filteredgender = persons.filter(
    (persons) => selectGender === "all" || persons.gender == selectGender
  );
  const filtered = persons
    .filter((person) =>
      person.name.toLowerCase().includes(inputName.toLowerCase())
    )
    .filter((person) => selectHouses === "all" || person.house === selectHouses)
    .filter(
      (persons) => selectGender === "all" || persons.gender == selectGender
    );

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
                  persons={filteredgender}
                  selectGender={selectGender}
                  handleChangeFilterGender={handleChangeFilterGender}
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
