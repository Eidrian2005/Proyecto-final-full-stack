async function PostProducts(id_categoria, imagen, nombre_producto, descripcion, unidades, precio) {
    try {
      const formData = new FormData();
      formData.append('id_categoria', id_categoria);
      formData.append('imagen', imagen); // Archivo de imagen
      formData.append('nombre_producto', nombre_producto);
      formData.append('descripcion', descripcion);
      formData.append('unidades', unidades);
      formData.append('precio', precio);
  
      const response = await fetch("http://localhost:3000/productos", {
        method: 'POST',
        body: formData,
      });
  
      return await response.json();
    } catch (error) {
      console.error('Error posting product:', error);
      throw error;
    }
  }
  
  export { PostProducts };
  