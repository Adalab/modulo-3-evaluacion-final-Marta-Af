import PropTypes from "prop-types";

function FilterName({ handleChangeFilterName, inputName }) {
  const handleChangeName = (event) => {
    const resultFilter = event.currentTarget.value.toLowerCase();
    handleChangeFilterName(resultFilter);
  };

  return (
    <>
      <label className="filter_name" htmlFor="inputName">
        Buscar por personaje:
      </label>
      <input
        type="text"
        value={inputName}
        onChange={handleChangeName}
        placeholder="Ej: Harry Potter"
      />
    </>
  );
}

FilterName.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleChangeFilterName: PropTypes.func.isRequired,
};

export default FilterName;
