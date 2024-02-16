import PropTypes from "prop-types";

function FilterName({ handleChangeFilterName, filterName }) {
  const handleChangeName = (event) => {
    const resultFilter = event.currentTarget.value.toLowerCase();
    handleChangeFilterName(resultFilter);
  };

  return (
    <>
      <label htmlFor="inputName">Buscar por personaje:</label>
      <input
        type="text"
        value={filterName}
        onChange={handleChangeName}
        placeholder="Ej: Harry Potter"
      />
    </>
  );
}

FilterName.propTypes = {
  filterName: PropTypes.string,
  handleChangeFilterName: PropTypes.func,
};

export default FilterName;
