import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify'; // Asegúrate de instalar react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { deleteCarrito } from '../services/DeleteCarrito';

export default function BtnCarrito({ producto }) {
  // Función para eliminar el producto
  async function eliminarCarrito(id) {
    try {
      await deleteCarrito(id);
      toast.warning("Producto eliminado exitosamente", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Error al eliminar el producto", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }

  return (
    <div>
      {/* Botón para eliminar producto */}
      <Button
        variant="danger"
        className="producto-delete-button"
        onClick={() => eliminarCarrito(producto.id)}
      >
        Eliminar
      </Button>
    </div>
  );
}
