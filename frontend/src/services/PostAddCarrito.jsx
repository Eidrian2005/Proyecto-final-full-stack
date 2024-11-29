async function Post_carrito(carritoData) {
    try {
            const response = await fetch("http://localhost:3000/carrito", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carritoData)
        });

        if (!response.ok) {
            throw new Error('Error al guardar en el carrito');
        }

        return await response.json();
    } catch (error) {
        console.error('Error al guardar en el carrito:', error);
        throw error;
    }
}

export default Post_carrito