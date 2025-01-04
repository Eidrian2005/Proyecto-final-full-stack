import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Gethistorial } from "../services/GetHistorial";

export default function ShowHistorialCompras() {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    loadHistorial();
  }, []);

  async function loadHistorial() {
    const fetchedHistorial = await Gethistorial(); // Cargar los datos de historial
    setHistorial(fetchedHistorial);
  }

  async function handleDeleteHistorialCompra(id) {
    if (window.confirm("¿Estás seguro de que deseas eliminar este historial de compra?")) {
      await deleteHistorialCompra(id); // Eliminar el historial de compras
      toast.warning("Historial de compra eliminado exitosamente", {
        autoClose: 1000,
      });
      loadHistorial(); // Volver a cargar el historial después de eliminar
    }
  }

  return (
    <div className="show-historial-container">
      <Button variant="primary" onClick={loadHistorial}>Cargar Historial de Compras</Button> {/* Botón para cargar el historial */}
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Pedido</th>
            <th>Fecha de Compra</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((compra) => (
            <tr key={compra.id}>
              <td>{compra.id_pedidos}</td>
              <td>{new Date(compra.fecha_compra).toLocaleDateString()}</td> {/* Formatear la fecha */}
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteHistorialCompra(compra.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
