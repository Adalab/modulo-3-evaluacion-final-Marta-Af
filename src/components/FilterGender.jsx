import PropTypes from "prop-types";

function FilterGender({ selectGender, handleChangeFilterGender }) {
  const onChangeSelect = (event) => {
    handleChangeFilterGender(event.currentTarget.value);
  };

  return (
    <div>
      <input
        type="radio"
        checked={selectGender === "female"}
        onChange={onChangeSelect}
        name="gender"
        id="female"
        value="female"
      />
      <label htmlFor="female">Mujer</label>

      <input
        type="radio"
        checked={selectGender === "male"}
        onChange={onChangeSelect}
        name="gender"
        id="male"
        value="male"
      />
      {/* <h2>Busca los personajes por género</h2> */}

      <label htmlFor="male">Hombre</label>
      <input
        type="radio"
        checked={selectGender === "all"}
        onChange={onChangeSelect}
        name="gender-all"
        id="all"
        value="all"
      />
      <label htmlFor="fender-all">Todos</label>
    </div>
  );
}

FilterGender.propTypes = {
  handleChangeFilterGender: PropTypes.func.isRequired,
  selectGender: PropTypes.string.isRequired,
};

export default FilterGender;
