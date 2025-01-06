import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Gethistorial } from "../services/GetHistorial";
import '../styles/userHistorial.css'

export default function HistorialDeCompras() {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    cargarHistorial();
  }, []);

  async function cargarHistorial() {
    try {
      const historialCargado = await Gethistorial(); // Obtener datos del historial
      setHistorial(historialCargado);
    } catch (error) {
      toast.error("Error al cargar el historial de compras.");
    }
  }

  async function eliminarHistorial(id) {
    if (window.confirm("¿Estás seguro de que deseas eliminar este registro de compra?")) {
      try {
        await deleteHistorialCompra(id); // Función para eliminar el historial
        toast.warning("Registro de compra eliminado exitosamente.", {
          autoClose: 1000,
        });
        cargarHistorial();
      } catch (error) {
        toast.error("Error al eliminar el registro.");
      }
    }
  }

  return (
    <div className="historial-compras-container">
      <h2>Historial de Compras</h2>
      <Button variant="primary" onClick={cargarHistorial} className="mb-3">
        Actualizar Historial
      </Button>
      {historial.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID Pedido</th>
              <th>Fecha de Compra</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((compra) => (
              <tr key={compra.id}>
                <td>{compra.id_pedidos}</td>
                <td>{new Date(compra.fecha_compra).toLocaleDateString()}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => eliminarHistorial(compra.id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No hay registros en el historial de compras.</p>
      )}
    </div>
  );
}
