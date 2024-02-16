import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PersonDetail({ findPerson }) {
  const params = useParams();

  const person = findPerson(params.id);

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
          <p>{person.species}</p>
        </div>
      </div>
    </>
  );
}

PersonDetail.propTypes = {
  findPerson: PropTypes.func,
};

export default PersonDetail;
