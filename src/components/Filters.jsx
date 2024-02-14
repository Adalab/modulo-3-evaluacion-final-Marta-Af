import PropTypes from "prop-types";
import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

function Filters() {
  return (
    <form className="filters">
      <FilterName />
      <FilterHouse />
    </form>
  );
}

Filters.propTypes = {};

export default Filters;
