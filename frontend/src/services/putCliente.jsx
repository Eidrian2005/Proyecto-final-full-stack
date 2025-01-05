async function updateClientes(clienteData) {
    try {
        // Leer el token del localStorage
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token no encontrado. Por favor, inicia sesión.');
        }

        // Crear un objeto FormData
        const formData = new FormData();

        // Agregar los datos del cliente (excluyendo la imagen)
        formData.append("direccion", clienteData.direccion);
        formData.append("usuario", clienteData.usuario);
        formData.append("correo", clienteData.correo);

        // Verificar si hay una nueva imagen y agregarla
        if (clienteData.imagen) {
            formData.append("imagen", clienteData.imagen); // imagen debe ser un archivo (File)
        }

        // Realizar la solicitud PUT con el token en el encabezado
        const response = await fetch(`http://localhost:3000/cliente/${clienteData.id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`, // Incluir el token en el encabezado
            },
            body: formData, // Usamos FormData aquí en lugar de JSON
        });

        // Verificar respuesta
        if (!response.ok) {
            throw new Error('Error al actualizar el cliente');
        }

        return await response.json();
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        throw error;
    }
}

export { updateClientes };
