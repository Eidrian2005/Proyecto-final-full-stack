async function Post_clientes(direccion, imagen, usuario, correo, contraseña) {
    try {
        const productsData = { 
            direccion,
            imagen,
            usuario,
            correo,
            contraseña
        };

        const response = await fetch("http://localhost:3000/cliente", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsData)
        });

        return await response.json();

        
    } catch (error) {
        console.error('Error al crear usuario', error);
        throw error;
    }
}

export{Post_clientes}