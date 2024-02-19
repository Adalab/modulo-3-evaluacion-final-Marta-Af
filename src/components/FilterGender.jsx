import PropTypes from "prop-types";

function FilterGender({ selectGender, handleChangeFilterGender }) {
  const onChangeSelect = (event) => {
    handleChangeFilterGender(event.currentTarget.value);
  };

  return (
    <legend className="filter_gender">
      Busca por género:
      <label htmlFor="female">Mujer</label>
      <input
        type="radio"
        checked={selectGender === "female"}
        onChange={onChangeSelect}
        name="gender"
        id="female"
        value="female"
      />
      <label htmlFor="male">Hombre</label>
      <input
        type="radio"
        checked={selectGender === "male"}
        onChange={onChangeSelect}
        name="gender"
        id="male"
        value="male"
      />
      <label className="" htmlFor="gender-all">
        Todos
      </label>
      <input
        type="radio"
        checked={selectGender === "all"}
        onChange={onChangeSelect}
        name="gender-all"
        id="all"
        value="all"
      />
    </legend>
  );
}

FilterGender.propTypes = {
  handleChangeFilterGender: PropTypes.func.isRequired,
  selectGender: PropTypes.string.isRequired,
};

export default FilterGender;
