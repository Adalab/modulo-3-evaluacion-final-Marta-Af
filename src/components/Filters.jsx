import PropTypes from "prop-types";
import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import FilterGender from "./FilterGender";
function Filters({
  selectHouses,
  handleChangeFilterHouse,
  inputName,
  handleChangeFilterName,
  handleChangeFilterGender,
  selectGender,
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
      <FilterGender
        selectGender={selectGender}
        handleChangeFilterGender={handleChangeFilterGender}
      />
    </form>
  );
}

Filters.propTypes = {
  inputName: PropTypes.string,
  handleChangeFilterName: PropTypes.func,
  handleChangeFilterHouse: PropTypes.func,
  handleChangeFilterGender: PropTypes.func,
  selectGender: PropTypes.string,
};

export default Filters;
