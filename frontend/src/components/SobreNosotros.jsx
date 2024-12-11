import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SobreNosotros.css";

const SobreNosotros = () => {
  return (
    <section className="about-us-section container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 text-center about-us-header">
          <h1>Sobre Nosotros</h1>
          <p>
            Aquí puedes agregar cualquier texto que desees sobre tu empresa, misión, visión o valores. Este espacio es completamente personalizable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
