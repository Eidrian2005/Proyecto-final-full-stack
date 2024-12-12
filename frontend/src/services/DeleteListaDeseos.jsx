async function deleteListaDeseo(id) {
    try {
        const response = await fetch(`http://localhost:3000/lista_de_deseados/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting desire with id ${id}`);
        }

        return { message: `desire with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting desire:', error);
        throw error;
    }
}

export { deleteListaDeseo };