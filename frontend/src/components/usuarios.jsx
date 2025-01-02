import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Getuser } from "../services/GetUser";
import { deleteUser } from "../services/DeleteUSers";
import "../styles/Showuser.css"

export default function ShowUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const fetchedUsers = await Getuser();
    setUsers(fetchedUsers);
  }

  async function handleDeleteUser(userId) {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      await deleteUser(userId);
      toast.warning("Usuario eliminado exitosamente", {
        autoClose: 1000,
      });
      loadUsers();
    }
  }

  return (
    <div className="show-users-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre de Usuario</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.usuario}</td>
              <td>{user.correo}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user.id)}
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
