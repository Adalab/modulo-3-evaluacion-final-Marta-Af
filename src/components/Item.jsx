import PropTypes from "prop-types";
import Item from "./Item";

function Item({ persons }) {
  return (
    <li className="item" key={persons.id}>
      <img
        src={
          persons.image ||
          "https://via.placeholder.com/210x295//666666/?text=HarryPotter"
        }
        alt=""
      />
      <h2 className="name_character">{persons.name}</h2>
      <h3 className="specie_character">{persons.species}</h3>
    </li>
  );
}

Item.propTypes = {
  persons: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
