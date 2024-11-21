import React, { useState } from "react";
import { Post_tarjeta } from "../services/postTarjetaCredito";

function FormularioAgregarTarjeta() {
  const [formulario, setFormulario] = useState({
    nombre_de_tarjeta: "",
    numero_de_tarjeta: "",
    fecha_de_vencimiento: "",
    codigo_de_seguridad: "",
  });

  const [errores, setErrores] = useState({});

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!formulario.nombre_de_tarjeta) {
      nuevosErrores.nombre_de_tarjeta = "El nombre en la tarjeta es obligatorio.";
    }
    if (!formulario.numero_de_tarjeta.match(/^\d{16}$/)) {
      nuevosErrores.numero_de_tarjeta = "El número de tarjeta debe tener 16 dígitos.";
    }
    if (!formulario.fecha_de_vencimiento.match(/^\d{4}-\d{2}-\d{2}$/)) {
      nuevosErrores.fecha_de_vencimiento = "La fecha debe estar en formato AAAA-MM-DD.";
    }
    if (!formulario.codigo_de_seguridad.match(/^\d{3,4}$/)) {
      nuevosErrores.codigo_de_seguridad = "El código de seguridad debe tener 3 o 4 dígitos.";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      try {
        // Llama al servicio para guardar la tarjeta
        const respuesta = await Post_tarjeta(
          formulario.nombre_de_tarjeta,
          formulario.numero_de_tarjeta,
          formulario.fecha_de_vencimiento,
          formulario.codigo_de_seguridad
        );

        console.log("Tarjeta guardada:", respuesta);

        // Limpia el formulario y errores
        setFormulario({
          nombre_de_tarjeta: "",
          numero_de_tarjeta: "",
          fecha_de_vencimiento: "",
          codigo_de_seguridad: "",
        });
        setErrores({});
      } catch (error) {
        console.error("Error al guardar la tarjeta:", error);
      }
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <div>
        <label>Nombre en la Tarjeta</label>
        <input
          type="text"
          name="nombre_de_tarjeta"
          value={formulario.nombre_de_tarjeta}
          onChange={manejarCambio}
          required
        />
        {errores.nombre_de_tarjeta && <p>{errores.nombre_de_tarjeta}</p>}
      </div>
      <div>
        <label>Número de Tarjeta</label>
        <input
          type="text"
          name="numero_de_tarjeta"
          value={formulario.numero_de_tarjeta}
          onChange={manejarCambio}
          required
        />
        {errores.numero_de_tarjeta && <p>{errores.numero_de_tarjeta}</p>}
      </div>
      <div>
        <label>Fecha de Vencimiento (AAAA-MM-DD)</label>
        <input
          type="date"
          name="fecha_de_vencimiento"
          value={formulario.fecha_de_vencimiento}
          onChange={manejarCambio}
          required
        />
        {errores.fecha_de_vencimiento && <p>{errores.fecha_de_vencimiento}</p>}
      </div>
      <div>
        <label>Código de Seguridad</label>
        <input
          type="text"
          name="codigo_de_seguridad"
          value={formulario.codigo_de_seguridad}
          onChange={manejarCambio}
          required
        />
        {errores.codigo_de_seguridad && <p>{errores.codigo_de_seguridad}</p>}
      </div>
      <button type="submit">Guardar Tarjeta</button>
    </form>
  );
}

export default FormularioAgregarTarjeta;
