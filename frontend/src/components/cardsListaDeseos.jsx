import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { GetProducto } from '../services/GetProducto';
import { GetListaDeseos } from '../services/GetListaDeseos';
import { deleteListaDeseo } from '../services/DeleteListaDeseos';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/cardListaD.css';

export default function ImgMediaCard() {
  const [listaDeseos, setListaDeseos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchDeseos = async () => {
      try {
        const deseosData = await GetListaDeseos();
        const productosData = await GetProducto();

        const listaConDetalles = deseosData.map((item) => {
          const productoDetalles = productosData.find(
            (producto) => producto.id === item.id_producto
          );
          return {
            id_lista: item.id,
            ...item,
            ...productoDetalles,
          };
        });

        setListaDeseos(listaConDetalles);
        setProductos(productosData);
      } catch (error) {
        console.error('Error al cargar datos:', error);
        toast.error('Error al cargar los datos.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    };

    fetchDeseos();
  }, []);

  const eliminarDeseo = async (idLista) => {
    try {
      setDeleting(true);
      await deleteListaDeseo(idLista);
      setListaDeseos((prev) => prev.filter((item) => item.id_lista !== idLista));
      toast.warning('Deseo eliminado exitosamente', {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Error al eliminar el deseo:', error);
      toast.error('Error al eliminar el deseo', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Centrar verticalmente en la pantalla
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {listaDeseos.map((deseo) => (
          <Grid item key={deseo.id_lista}>
            <Card
              sx={{
                maxWidth: 245,
                alignItems: 'center',
                padding: 2,
                margin: '0 auto',
              }}
            >
              <CardMedia
                component="img"
                alt={deseo.nombre_producto || 'Producto'}
                height="140"
                image={
                  deseo.imagen || '/static/images/cards/contemplative-reptile.jpg'
                }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {deseo.nombre_producto || 'Nombre no disponible'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {deseo.descripcion || 'Sin descripción disponible'}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Precio: ${deseo.precio || 'No disponible'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => eliminarDeseo(deseo.id_lista)}
                  disabled={deleting}
                >
                  {deleting ? 'Eliminando...' : 'Eliminar'}
                </Button>
                <Button size="small" variant="contained" color="primary">
                  Guardar para más tarde
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
