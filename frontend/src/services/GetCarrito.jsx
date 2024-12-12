async function GetCarrito() {
    try {

        const token = localStorage.getItem('token'); // Obtén el token almacenado

        if (!token) {
            throw new Error('No se encontró el token de autenticación');
        }

        const response = await fetch('http://localhost:3000/carrito', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { GetCarrito };