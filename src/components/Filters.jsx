import PropTypes from "prop-types";
import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

function Filters({ filterHouses, handleChangeFilterHouse }) {
  return (
    <form className="filters">
      <FilterName />
      <FilterHouse
        filterHouses={filterHouses}
        handleChangeFilterHouse={handleChangeFilterHouse}
      />
    </form>
  );
}

Filters.propTypes = {
  filterHouses: PropTypes.string,
  handleChangeFilterHouse: PropTypes.func,
};

export default Filters;
