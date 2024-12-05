import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { updateproductos } from "../services/PutProducts";
import { GetCategoria } from "../services/GetCategoria";
import { toast } from "react-toastify";

function ModalEditar({ producto }) {
  const [show, setShow] = useState(false);
  const [categoria, setCategorias] = useState([]); // Lista de categorías
  const [productoData, setProductoData] = useState({
    id_categoria: '',
    imagen: '',
    nombre_producto: '',
    descripcion: '',
    unidades: '',
    precio: 0,
  });

  // Mostrar el modal y cargar los datos del producto
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setProductoData(producto); // Carga los datos del producto al abrir
  };

  // Cargar categorías al montar el componente
  const loadCategory = useCallback(async () => {
    try {
      const response = await GetCategoria();
      setCategorias(response); // Actualiza la lista de categorías
    } catch (error) {
      console.error("Error fetching categorias", error);
    }
  }, []);

  useEffect(() => {
    loadCategory(); // Carga las categorías al montar el componente
  }, [loadCategory]);

  // Manejar cambios en los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejar la carga de la imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductoData((prevData) => ({
          ...prevData,
          imagen: reader.result, // Convierte la imagen a base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Enviar los datos actualizados
  const handleSubmit = async () => {
    try {
      await updateproductos(productoData);
      toast.success("Producto actualizado exitosamente", { autoClose: 1000 });
      handleClose();
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error al actualizar el producto", { autoClose: 1000 });
    }
  };

  return (
    <>
      <Button variant="warning" className="icon-btn edit-btn" onClick={handleShow}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editando producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="contenedorPadre">
            {/* Subir Imagen */}
            <div>
              <input type="file" name="imagen" onChange={handleImageChange} />
              {productoData.imagen && <img src={productoData.imagen } className="img-fluid img-thumbnail" alt="Imagen del producto" />}
            </div>

            {/* Nombre del producto */}
            <div className="Productos">
              <input
                type="text"
                name="nombre_producto"
                placeholder="Nombre del producto"
                value={productoData.nombre_producto}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Descripción */}
            <div className="Descripcion">
              <textarea
                name="descripcion"
                placeholder="Describa el producto"
                value={productoData.descripcion}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Unidades */}
            <div className="Unidades">
              <input
                type="number"
                name="unidades"
                placeholder="Unidades disponibles"
                value={productoData.unidades}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Categorías */}
            <div>
              <select
                id="id_categoria"
                name="id_categoria"
                value={productoData.id_categoria}
                onChange={handleChange}
              >
                <option value="">Seleccionar categoría</option>
                {categoria.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.categoria}
                  </option>
                ))}
              </select>
            </div>

            {/* Precio */}
            <div className="Precio">
              <input
                type="number"
                name="precio"
                placeholder="Precio del producto"
                value={productoData.precio}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Actualizar Producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditar;
