async function PostProducts(  id_categoria, imagen, nombre_producto, descripcion, unidades, precio ) {
    try {
        const productsData = { 
            id_categoria,
            imagen,
            nombre_producto,
            descripcion,
            unidades,
            precio
        };

        const response = await fetch("http://localhost:3000/productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsData)
        });

        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{PostProducts}