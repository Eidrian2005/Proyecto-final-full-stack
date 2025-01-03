
async function Gethistorial() {
    try {

        const response = await fetch('http://localhost:3000/historial_compras', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
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
