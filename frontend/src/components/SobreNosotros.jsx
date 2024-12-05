import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/SobreNosotros.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faLightbulb, faRocket } from "@fortawesome/free-solid-svg-icons";

const SobreNosotros = () => {
  return (
    <section className="about-us-section container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center about-us-header">
          <h1>Sobre Nosotros</h1>
          <p>
            Somos una empresa comprometida con la innovación, la excelencia y la creación de soluciones que transformen el mundo.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 text-center about-us-card">
          <FontAwesomeIcon icon={faHandshake} className="about-icon" />
          <h3>Confianza</h3>
          <p>Establecemos relaciones sólidas basadas en la integridad y el respeto mutuo.</p>
        </div>
        <div className="col-md-4 text-center about-us-card">
          <FontAwesomeIcon icon={faLightbulb} className="about-icon" />
          <h3>Innovación</h3>
          <p>Creemos en el poder de las ideas para resolver los desafíos del futuro.</p>
        </div>
        <div className="col-md-4 text-center about-us-card">
          <FontAwesomeIcon icon={faRocket} className="about-icon" />
          <h3>Crecimiento</h3>
          <p>Nos esforzamos por alcanzar nuevos horizontes y superar nuestras metas.</p>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
