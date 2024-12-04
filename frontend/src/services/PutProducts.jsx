async function updateproductos(productoData) {
    try {
        // Crear un objeto FormData
        const formData = new FormData();
        
        // Agregar los datos del producto (excluyendo la imagen)
        formData.append("id_categoria", productoData.id_categoria);
        formData.append("nombre_producto", productoData.nombre_producto);
        formData.append("descripcion", productoData.descripcion);
        formData.append("unidades", productoData.unidades);
        formData.append("precio", productoData.precio);

        // Verificar si hay una nueva imagen y agregarla
        if (productoData.imagen) {
            formData.append("imagen", productoData.imagen); // imagen debe ser un archivo (File)
        }

        // Realizar la solicitud PUT
        const response = await fetch(`http://localhost:3000/productos/${productoData.id}`, {
            method: 'PUT',
            body: formData, // Usamos FormData aquí en lugar de JSON
        });

        // Verificar respuesta
        if (!response.ok) {
            throw new Error('Error al actualizar el producto');
        }

        return await response.json();
    } catch (error) {
        console.error('Error update producto:', error);
        throw error;
    }
}

export { updateproductos }
