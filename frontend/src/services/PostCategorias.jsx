async function PostCategorias( categoria ) {
    try {
        const productsData = { 
            categoria
        };

        const response = await fetch("http://localhost:3000/categoria", {
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

export{PostCategorias}