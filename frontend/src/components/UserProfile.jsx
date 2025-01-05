import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Image, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/userProfile.css';
import Header from './header';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import { GetCliente } from '../services/GetClientes';
import { updateClientes } from '../services/putCliente';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const userId = 1; // Reemplaza con el id dinámico del usuario autenticado

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetCliente(userId);
                setUserData(data);
                setPreviewImage(data.imagen || "https://via.placeholder.com/150");
            } catch (error) {
                console.error("Error al cargar los datos del usuario:", error);
            }
        };

        fetchData();
    }, [userId]);

    const handleEditClick = () => {
        setShowModal(true);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedImage(file);
            setPreviewImage(URL.createObjectURL(file)); // Generar una vista previa de la imagen
        } else {
            alert('Por favor, selecciona un archivo de imagen válido.');
        }
    };

    const handleSaveImage = async () => {
        if (selectedImage && userData) {
            try {
                await updateClientes({
                    id: userData.id,
                    direccion: userData.direccion,
                    usuario: userData.usuario,
                    correo: userData.correo,
                    imagen: selectedImage,
                });
                setShowModal(false); // Cerrar el modal
                alert('Imagen actualizada correctamente.');
            } catch (error) {
                console.error("Error al actualizar la imagen:", error);
                alert('Error al actualizar la imagen.');
            }
        } else {
            alert('Por favor, selecciona una imagen antes de guardar.');
        }
    };

    if (!userData) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <Header />
            <Sidebar />
            <Container fluid className="profile-container">
                <Row>
                    {/* Sección Izquierda */}
                    <Col md={4} className="profile-left">
                        <div className="profile-photo-container">
                            <Image
                                src={previewImage}
                                roundedCircle
                                className="profile-photo"
                            />
                        </div>
                        <h5 className="profile-username">{userData.usuario}</h5>
                        <Button variant="outline-dark" className="profile-edit-btn" onClick={handleEditClick}>
                            <FontAwesomeIcon icon={faEdit} /> Editar
                        </Button>
                    </Col>

                    {/* Sección Derecha */}
                    <Col md={8} className="profile-right">
                        <h6 className="profile-section-title">Dirección</h6>
                        <Card className="profile-card">
                            <Card.Text>{userData.direccion}</Card.Text>
                        </Card>
                        <div className="profile-logout-container">
                            <Button variant="outline-danger" className="profile-logout-btn">
                                <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar sesión
                            </Button>
                            <Link to="/Historial" variant="outline-dark">
                                Historial
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Modal para editar la imagen */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Imagen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFile">
                            <Form.Label>Selecciona una nueva imagen</Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                        </Form.Group>
                        {previewImage && (
                            <div className="text-center mt-3">
                                <Image src={previewImage} roundedCircle width={150} height={150} />
                            </div>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSaveImage}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProfilePage;
