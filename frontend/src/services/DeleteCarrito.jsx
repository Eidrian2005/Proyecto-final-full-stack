async function deleteCarrito(id) {
    try {
        const token = localStorage.getItem('token'); // Obtén el token almacenado

        if (!token) {
            throw new Error('No se encontró el token de autenticación');
        }
        const response = await fetch(`http://localhost:3000/carrito/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting product with id ${id}`);
        }

        return { message: `product with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

export { deleteCarrito };