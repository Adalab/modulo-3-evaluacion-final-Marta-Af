import PropTypes from "prop-types";
import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

function Filters({
  filterHouses,
  handleChangeFilterHouse,
  filterNames,
  handleChangeFilterName,
}) {
  return (
    <form className="filters">
      <FilterName
        handleChangeFilterName={handleChangeFilterName}
        filterNames={filterNames}
      />
      <FilterHouse
        filterHouses={filterHouses}
        handleChangeFilterHouse={handleChangeFilterHouse}
      />
    </form>
  );
}

Filters.propTypes = {
  filterNames: PropTypes.string,
  handleChangeFilterName: PropTypes.func,
  filterHouses: PropTypes.string,
  handleChangeFilterHouse: PropTypes.func,
};

export default Filters;
