import PropTypes from "prop-types";
import Item from "./Item";

function List({ persons }) {
  return (
    <ul className="list">
      {persons.map((person) => (
        <Item key={person.id} person={person} />
      ))}
    </ul>
  );
}

List.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      alternate_names: PropTypes.array,
      gender: PropTypes.string,
      alive: PropTypes.string,
      house: PropTypes.string,
    })
  ),
};

export default List;
