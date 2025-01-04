async function deleteHistorial(id) {
    try {
        const response = await fetch(`http://localhost:3000/historial_compras/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
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

export { deleteHistorial };