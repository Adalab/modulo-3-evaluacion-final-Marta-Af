import PropTypes from "prop-types";

function FilterName({ handleChangeFilterName, inputName }) {
  const handleChangeName = (event) => {
    const resultFilter = event.currentTarget.value.toLowerCase();
    handleChangeFilterName(resultFilter);
    // const errorMensaje = {inputName !== 0 ? (resultFilter) :  (
    //   <p>{`No existe ningún personaje con el nombre ${inputName}`}</p>)};
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
      <div>{/* {errorMensaje} */}</div>
    </>
  );
}

FilterName.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleChangeFilterName: PropTypes.func.isRequired,
};

export default FilterName;
