import React, { useState, useEffect, useCallback } from 'react';
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from 'react-icons/fa';




export default function ShowProducts() {  

//   const [productos, setProductos] = useState([]);

//   const loadProducts = useCallback(() => {
//     const fetchProductos = async () => {
//       try{
//         const response = await GetProducts()
//         setProductos(response);
//       } catch (error){
//         console.error("Error fetching Products", error)
//       }
//     }
//     fetchProductos()
//   })

//   useEffect(() => {
//     loadProducts();
//   }, [loadProducts]);

//   async function eliminarProducto(id) {
//     await deleteProducts(id)
//     loadProducts();
//     toast.warning('Producto Eliminado exitosamente',{
//       autoClose: 1000
//   })
//   }



// loadProducts()
  return (
    <>
     <div className="container mt-4">
      <Row className="g-4">
         
          // <Col  xs={12} sm={6} md={4}>
            <Card className="product-card shadow-sm">
              <Card.Body>
                <Card.Title className="text-center">{}</Card.Title>
                <Card.Text>
                  <strong>Precio:</strong> ${} <br />
                  <strong>Cantidad:</strong> {}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" className="edit-btn">
                    <FaEdit /> Editar
                  </Button>
                  <Button variant="danger" className="delete-btn">
                    <FaTrash /> Eliminar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        
      </Row>
    </div>
    </>
    
  );
}

