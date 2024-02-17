import PropTypes from "prop-types";
import logo from "../images/logo-harrypotter.png";

function Header() {
  return (
    <header className="header">
      <img className="image" src={logo} title="Logo" alt="Logo Harry Potter" />
    </header>
  );
}

Header.propTypes = {};

export default Header;
