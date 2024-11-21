async function Post_tarjeta(nombre_de_tarjeta, numero_de_tarjeta, fecha_de_vencimiento, codigo_de_seguridad) {
    try {
        const tarjetaData = {
            nombre_de_tarjeta,
            numero_de_tarjeta,
            fecha_de_vencimiento,
            codigo_de_seguridad,
        };

        const response = await fetch("http://localhost:3000/informacion_pago", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarjetaData),
        });

        if (!response.ok) {
            throw new Error(`Error al crear tarjeta: ${response.statusText}`);
        }

        return await response.json();

    } catch (error) {
        console.error('Error al crear tarjeta de crédito:', error);
        throw error;
    }
}

export { Post_tarjeta };
