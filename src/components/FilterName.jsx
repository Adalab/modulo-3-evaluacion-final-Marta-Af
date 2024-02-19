import PropTypes from "prop-types";

function FilterName({ handleChangeFilterName, inputName }) {
  const handleChangeName = (event) => {
    const resultFilter = event.currentTarget.value.toLowerCase();
    handleChangeFilterName(resultFilter);
  };

  return (
    <>
      <fieldset>
        <label htmlFor="inputName">Buscar por personaje:</label>
        <input
          className="input_name"
          type="text"
          value={inputName}
          onChange={handleChangeName}
          placeholder="Ej: Harry Potter"
        />
      </fieldset>
    </>
  );
}

FilterName.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleChangeFilterName: PropTypes.func.isRequired,
};

export default FilterName;
