import PropTypes from "prop-types";
import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

function Filters({
  selectHouses,
  handleChangeFilterHouse,
  inputName,
  handleChangeFilterName,
}) {
  return (
    <form className="filters">
      <FilterName
        handleChangeFilterName={handleChangeFilterName}
        inputName={inputName}
      />
      <FilterHouse
        selectHouses={selectHouses}
        handleChangeFilterHouse={handleChangeFilterHouse}
      />
    </form>
  );
}

Filters.propTypes = {
  inputName: PropTypes.string,
  handleChangeFilterName: PropTypes.func,
  selectHouses: PropTypes.string,
  handleChangeFilterHouse: PropTypes.func,
};

export default Filters;
