import React, { useState, useEffect } from "react";
import "../styles/SobreNosotros.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const HeaderOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`header-overlay ${isVisible ? "" : "hidden"}`}>
      <Header />
    </div>
  );
};

const SobreNosotros = () => {
  return (
    <div className="about-us-section">
      {/* Barra lateral */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="main-content">
        <HeaderOverlay />

        {/* Sección de contenido */}
        <div className="about-us-header text-center">
          <h1>Sobre Nosotros</h1>
          <p>
            En <strong>ShedaboShop</strong>, nos especializamos en ofrecerte una experiencia de compra rápida, sencilla y segura. Desde productos esenciales hasta artículos personalizados, trabajamos para que encuentres todo lo que necesitas en un solo lugar.
          </p>
          <p>
            Nuestra misión es conectar contigo a través de un servicio eficiente, precios competitivos y una atención al cliente excepcional. Con un sistema de pedidos fácil de usar y opciones de entrega flexibles, adaptamos la experiencia a tu estilo de vida.
          </p>
          <p>¡Gracias por elegirnos como tu tienda de confianza!</p>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
