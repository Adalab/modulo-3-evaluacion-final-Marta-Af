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
    <>
      <div className="container_filters">
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
        <form className="filter_select">
          <FilterGender
            selectGender={selectGender}
            handleChangeFilterGender={handleChangeFilterGender}
          />
        </form>
      </div>
    </>
  );
}

Filters.propTypes = {
  inputName: PropTypes.string,
  handleChangeFilterName: PropTypes.func,
  handleChangeFilterHouse: PropTypes.func,
  handleChangeFilterGender: PropTypes.func,
};

export default Filters;
