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
      <label htmlFor="male">Hombre</label>
      <input
        type="radio"
        checked={selectGender === "All"}
        onChange={onChangeSelect}
        name="gender-all"
        id="male"
        value="All"
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
