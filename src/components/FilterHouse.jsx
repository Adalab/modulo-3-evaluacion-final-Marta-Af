import PropTypes from "prop-types";

function FilterHouse({ filterHouses, handleChangeFilterHouse }) {
  const handleChange = (event) => {
    handleChangeFilterHouse(event.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="houseSelect">Selecciona la casa:</label>
      <select id="houseSelect" value={filterHouses} onChange={handleChange}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
}

FilterHouse.propTypes = {
  filterHouses: PropTypes.string,
  handleChangeFilterHouse: PropTypes.func,
};

export default FilterHouse;
