import PropTypes from "prop-types";

function Item({ person }) {
  return (
    <li className="item" key={person.id}>
      <img
        src={
          person.image ||
          "https://via.placeholder.com/210x295//666666/?text=HarryPotter"
        }
        alt=""
      />
      <h2 className="name_character">{person.name}</h2>
      <h3 className="specie_character">{person.species}</h3>
    </li>
  );
}

Item.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
