import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PersonDetail({ findPerson }) {
  const params = useParams();
  const person = findPerson(params.id);

  if (!person) {
    return (
      <div>
        <h1>Oops...</h1>
        <h1>No se encontró el personaje.</h1>
      </div>
    );
  }

  const statusPerson = person.alive ? "Viva" : "Muerto";
  const speciesType =
    person.species === "human"
      ? "Humano"
      : person.species === "werewolf"
      ? "Hombre Lobo"
      : person.species === "cat"
      ? "Gato"
      : person.species === "goblin"
      ? "Duende"
      : person.species === "owl"
      ? "Búho"
      : person.species === "ghost"
      ? "Fantasma"
      : person.species === "poltergeist"
      ? "Poltergeist"
      : "Desconocido";
  const genderType = person.gender === "male" ? "Hombre" : "Mujer";

  return (
    <>
      <div>
        <button>
          <Link to="/">Volver al listado</Link>
        </button>
        <div className="details">
          <img
            src={
              person.image ||
              "https://via.placeholder.com/210x295//666666/?text=HarryPotter"
            }
            alt="Foto"
            title="Foto"
          />
        </div>
        <div>
          <h2 className="tittle_detail">{person.name}</h2>
          <p>Especie: {speciesType}</p>
          <p>Estatus: {statusPerson}</p>
          <p>Genero: {genderType}</p>
          <p>Casa: {person.house}</p>
          <p>Nombre/s alternativo/s:</p>
          {person.alternate_names.length > 0 ? (
            <ul>
              {person.alternate_names.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          ) : (
            <p>No se conocen nombres alternativos.</p>
          )}
        </div>
      </div>
    </>
  );
}

PersonDetail.propTypes = {
  findPerson: PropTypes.func.isRequired,
};

export default PersonDetail;
