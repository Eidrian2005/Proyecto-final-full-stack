async function Post_auth( usuario,contraseña) {
    try {
        const productsData = { 
            usuario,
            contraseña
        };

        const response = await fetch("http://localhost:3000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsData)
        });

        

      const dataToken = await response.json();

        console.log('TOKEN:', dataToken)

        return  dataToken

        
    } catch (error) {
        console.error('Error al crear usuario', error);
        throw error;
    }
}

export{Post_auth}