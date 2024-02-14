import PropTypes from "prop-types";

function FilterHouse() {
  return (
    <>
      <label htmlFor="">Selecciona la casa:</label>
      <select name="" id="">
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
}

FilterHouse.propTypes = {};

export default FilterHouse;
