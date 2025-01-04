
async function Gethistorial() {
    try {

        const token = localStorage.getItem('token'); // Obtén el token almacenado

        if (!token) {
            throw new Error('No se encontró el token de autenticación');
        }

        const response = await fetch('http://localhost:3000/historial_compras', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching user');
        }

        const user = await response.json(); 
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

export { Gethistorial };
