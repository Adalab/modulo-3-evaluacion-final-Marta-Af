import PropTypes from "prop-types";

function FilterHouse({ selectHouses, handleChangeFilterHouse }) {
  const handleChange = (event) => {
    handleChangeFilterHouse(event.currentTarget.value);
  };

  return (
    <>
      <fieldset>
        <label htmlFor="houseSelect">Selecciona la casa:</label>
        <select id="houseSelect" value={selectHouses} onChange={handleChange}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="all">Todos</option>
        </select>
      </fieldset>
    </>
  );
}

FilterHouse.propTypes = {
  selectHouses: PropTypes.string,
  handleChangeFilterHouse: PropTypes.func,
};

export default FilterHouse;
