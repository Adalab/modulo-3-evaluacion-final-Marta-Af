import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import gorro from "../images/gorro.png";
import araña from "../images/signes/araña.jpg";
import hombelobo from "../images/signes/homeLobo.jpg";
import buho from "../images/signes/buho.jpg";
import duende from "../images/signes/duende.jpg";
import elfo from "../images/signes/elfo.jpg";
import gato from "../images/signes/gato.jpg";
import hipogrifo from "../images/signes/hipogrifo.jpg";
import humano from "../images/signes/humano.jpg";
import fantasma from "../images/signes/fantasma.jpg";

function PersonDetail({ findPerson }) {
  const params = useParams();
  const person = findPerson(params.id);

  if (!person) {
    return (
      <div>
        <h1>Oops...</h1>
        <img className="img_detail" src={gorro} title="gorro" alt="gorro" />
        <h1>No se encontró el personaje.</h1>
      </div>
    );
  }

  const statusPerson = person.alive ? "Viva" : "Muerto";
  const speciesType =
    person.species === "human" ? (
      <>
        Humano
        <img src={humano} alt="Human" className="logo" />
      </>
    ) : person.species === "werewolf" ? (
      <>
        Hombrelobo
        <img src={hombelobo} alt="hombelobo" className="logo" />
      </>
    ) : person.species === "cat" ? (
      <>
        Gato
        <img src={gato} alt="Gato" className="logo" />
      </>
    ) : person.species === "goblin" ? (
      <>
        Duende
        <img src={duende} alt="Duende" className="logo" />
      </>
    ) : person.species === "owl" ? (
      <>
        Búho
        <img src={buho} alt="Búho" className="logo" />
      </>
    ) : person.species === "ghost" ? (
      <>
        Fantasma
        <img src={fantasma} alt="Fantasma" className="logo" />
      </>
    ) : person.species === "poltergeist" ? (
      <>
        Poltergeist
        <img src={duende} alt="duende" className="logo" />
      </>
    ) : person.species === "house-elf" ? (
      <>
        Elfo Domestico
        <img src={elfo} alt="elfo" className="logo" />
      </>
    ) : person.species === "acromantula" ? (
      <>
        Acromántula
        <img src={araña} alt="Acromántula" className="logo" />
      </>
    ) : person.species === "hippogriff" ? (
      <>
        Hippogriff
        <img src={hipogrifo} alt="Hippogriff" className="logo" />
      </>
    ) : (
      "Desconocido"
    );

  const genderType = person.gender === "male" ? "Hombre" : "Mujer";

  return (
    <>
      <button className="btn_go">
        <Link to="/">Volver al listado</Link>
      </button>
      <div className=" secction_detail">
        <div className="details">
          <img
            src={
              person.image ||
              "https://via.placeholder.com/210x295//666666/?text=HarryPotter"
            }
            alt="Foto"
            title="Foto"
          />
        </div>
        <div className="text">
          <h2 className="tittle_detail">{person.name}</h2>
          <p>Especie: {speciesType}</p>
          <p>Estatus: {statusPerson}</p>
          <p>Genero: {genderType}</p>
          <p>Casa: {person.house}</p>
          <p>Nombre/s alternativo/s:</p>
          {person.alternate_names.length > 0 ? (
            <ul>
              {person.alternate_names.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          ) : (
            <p>No se conocen nombres alternativos.</p>
          )}
        </div>
      </div>
    </>
  );
}

PersonDetail.propTypes = {
  findPerson: PropTypes.func.isRequired,
};

export default PersonDetail;
