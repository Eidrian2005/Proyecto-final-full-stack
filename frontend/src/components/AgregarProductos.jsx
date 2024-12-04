import { useState, useEffect, useCallback, useContext } from 'react';
import { ProductContext } from './ProductContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { toast } from 'react-toastify';
import { PostProducts } from '../services/PostProductos';
import { GetCategoria } from '../services/GetCategoria';
import ModalCategoria from './AgregarCategoria';


function ModalProducto() {
  const { loadProducts } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoria, setCategorias] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [nombre_producto, setNombreProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [unidades, setUnidades] = useState(''); 
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState(null)

  // Cargar categorías al montar el componente
  const loadCategory = useCallback(async () => {
    try {
      const response = await GetCategoria();
      setCategorias(response); // Actualiza el estado con las categorías obtenidas
    } catch (error) {
      console.error('Error fetching categorias', error);
    }
  }, []);


  useEffect(() => {
    loadCategory(); // Recargar categorías cuando el componente se monta
  }, [loadCategory]);

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

 

  const agregarProducto = async () => {
    //validacion para avisar de campos sin llenar
    if ( !nombre_producto || !unidades|| !descripcion || !precio || !categoriaSeleccionada) {
      toast.warning('Por favor llenar todos los campos', { autoClose: 1000 });
      return;
    }

    try {
      await PostProducts(
        categoriaSeleccionada, // ID de la categoría seleccionada
        imagen,
        nombre_producto,
        descripcion,
        unidades,
        precio
      );
      toast.success('Producto agregado exitosamente', { autoClose: 1000 });
      handleClose();
      loadProducts()
    } catch (error) {
      toast.error('Error al agregar el producto', { autoClose: 1000 });
      console.error(error);
    }
  };


  


  return (
    <>

      
      <button className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3" onClick={handleShow}>
      <FontAwesomeIcon icon={faPlus} className="me-2" /> Añadir Productos
      </button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

<div id='contenedorPadre'>  


{/* Subir Imagen */}
<div>
        <input
         type="file"
         onChange={(event) => {
           const file = event.target.files[0];
           if (file) {
             setImagen(file); // Directamente el archivo, no su base64
           }
         }}
        />
</div>

{/* Nombre del producto */}
<div className='Productos'>
        
        <input type="text"
        name="Producto" 
        id=""
        value={nombre_producto}
        placeholder='Nombre de producto'
        onChange={(e) => setNombreProducto(e.target.value)}
        />
</div>

 {/* Descripción */}
<div className='Descripcion'>
        <textarea 
        name="" 
        placeholder='Describa el Producto' 
        id="" 
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        > </textarea>
</div>

{/* Unidades */}
<div>
        <input
        type="number"
        placeholder="Unidades disponibles"
        value={unidades}
        onChange={(e) => setUnidades(e.target.value)}
        />
</div>


{/* Categorías */}
<div>
        <select value={categoriaSeleccionada} onChange={handleCategoriaChange}>
        <option value="">Seleccionar categoría</option>
        {categoria.map((categoria) => (
        <option key={categoria.id} value={categoria.id}>
        {categoria.categoria}
        </option>
        ))}
        </select>
</div>

<div className='Precio'>
        
        <input
          type="number"
          name="price"
          placeholder='Precio del producto'
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
</div>  
</div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={agregarProducto}>
            Agregar Producto
          </Button>
        </Modal.Footer>
      </Modal>

            {/* Modal de Categoría */}
      {/* Pasa correctamente la función loadCategory como prop */}
      <ModalCategoria onCategoriaAgregada={loadCategory} />

    </>
  );
}

export default ModalProducto;
