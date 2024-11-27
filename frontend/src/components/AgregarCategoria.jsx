import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { PostCategorias } from '../services/PostCategorias';
import {  faTags, faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ModalCategoria({onCategoriaAgregada}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categorias, setCategoria] = useState('')


  function cargaCategoria(event) {
    setCategoria(event.target.value)
  }


  async function agregarCategoria() {
    if ( !categorias) {
      toast.warning('Por favor llenar todos los campos',{
          autoClose: 1000
      })
      
  } else{
     await PostCategorias(categorias)
    toast.success('Categoria agregada exitosamente',{
        autoClose: 1000
    })
    onCategoriaAgregada();
    handleClose()
    setCategoria('');
  }
    
  }

  return (
    <>

      
      <button className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3" onClick={handleShow}>
      <FontAwesomeIcon icon={faTags} className="me-2" />
      Añadir Categoria 
      </button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

<div id='contenedorPadre'>  

<div>
        
        <input type="text"
        name="Categoria" 
        id=""
        placeholder='Categoria'
        onChange={cargaCategoria}
        />
</div>

</div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={agregarCategoria}>
            Agregar Categoria
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCategoria;
