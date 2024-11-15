const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const app = express();
const PORT = 3000;
const authRoutes = require('./routes/auth_routes');
const auth = require('./middlewares/authMiddleware');
const carrito_Routes = require('./routes/carrito_Routes');
const categoria_Routes = require('./routes/categoria_Routes')
const clientes_Routes = require('./routes/clientes_Routes');
const condiciones_Routes = require('./routes/condiciones_Routes');
const historial_compras_Routes = require('./routes/historial_compra_Routes');
const historial_ventas_Routes = require('./routes/historial_ventas_Routes')

app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('No se pudo conectar a la base de datos:', error));

// Usar las rutas de productos

app.use('/auth', authRoutes);
app.use('/Carrito', carrito_Routes);
app.use('/Categoria' , categoria_Routes);
app.use('/Cliente' , clientes_Routes);
app.use('/Condiciones' , condiciones_Routes);
app.use('/Historial_compras' , historial_compras_Routes);
app.use('/Historial_ventas' , historial_ventas_Routes);
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});