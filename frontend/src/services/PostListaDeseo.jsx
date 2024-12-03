async function PostListaDeDeseos(listaData) {
    try {
        const response = await fetch("http://localhost:3000/lista_de_deseados", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listaData)
        });
        return await response.json();

    } catch (error) {
        console.error('Error al crear entrada en la lista de deseos', error);
        throw error;
    }
}

export default PostListaDeDeseos ;
