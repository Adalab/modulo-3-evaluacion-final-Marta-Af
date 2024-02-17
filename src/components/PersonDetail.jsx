import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PersonDetail({ findPerson }) {
  const params = useParams();

  const person = findPerson(params.id);

  if (!person) {
    return (
      <div>
        <h1>Oops...</h1> <h1>No se encontró el personaje.</h1>
      </div>
    );
  }
  const statusPerson = person.alive ? "Viva" : "Muerto";
  console.log(person);
  return (
    <>
      <div>
        <button>
          <Link to="/">Volver</Link>
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
          <p>Especie:{person.species}</p>
          <p>Estatus: {statusPerson}</p>
          <p>Genero:{person.gender}</p>
          <p>Casa: {person.house}</p>
          <p>Nombre alternativo:{person.alternate_names}</p>
        </div>
      </div>
      <button>
        Comparte
        <p></p>
      </button>
    </>
  );
}

PersonDetail.propTypes = {
  findPerson: PropTypes.func,
};

export default PersonDetail;
