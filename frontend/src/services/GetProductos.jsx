async function Getproductos() {
    try {
        const response = await fetch('http://localhost:3000/productos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching products');
        }

        const users = await response.json();
        
        if (!Array.isArray(users)) {
            throw new Error('Response is not an array');
        }
        return users;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export { Getproductos };