async function updateproductos(productoData) {
    try {
    
       
        const response = await fetch(`http://localhost:3000/productos/${productoData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoData)
        });

    
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateproductos}