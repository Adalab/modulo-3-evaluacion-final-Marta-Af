import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import List from "./List";
import { fetchPersons } from "../components/services/fetch";
import { useState, useEffect } from "react";

function App() {
  //Variables de estado
  const [persons, setPersons] = useState([]);

  //UseEffect
  useEffect(() => {
    //Cuando carga la pagina
    fetchPersons().then((responseData) => {
      setPersons(responseData);
    });
  }, []); //Array cuando cargue la pagina
  //Funciones de eventos

  //Variables para html

  //Html del return

  return (
    <div className="page">
      <Header />
      <Filters />
      <div className="container">
        <List persons={persons} />
      </div>
    </div>
  );
}

export default App;
