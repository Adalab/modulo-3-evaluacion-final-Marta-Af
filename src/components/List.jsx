import PropTypes from "prop-types";
import Item from "./Item";

function List({ persons }) {
  return (
    <ul>
      <Item persons={persons} />
    </ul>
  );
}

List.propTypes = {
  persons: PropTypes.array,
};

export default List;
