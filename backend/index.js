require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const app = express();
const PORT = process.env.PORT
const cors = require('cors');
const authRoutes = require('./routes/auth_routes');
const auth = require('./middlewares/authMiddleware');
const carrito_Routes = require('./routes/carrito_Routes');
const categoria_Routes = require('./routes/categoria_Routes')
const clientes_Routes = require('./routes/clientes_Routes');
const condiciones_Routes = require('./routes/condiciones_Routes');
const historial_compras_Routes = require('./routes/historial_compra_Routes');
const historial_ventas_Routes = require('./routes/historial_ventas_Routes');
const informacion_de_pago_routes = require('./routes/informacion_de_pago_routes');
const lista_de_deseados_routes = require('./routes/lista_deseados_routes');
const pedidos_routes = require('./routes/pedidos_routes');
const productos_routes = require('./routes/productos_routes')
app.use(express.json()); // Middleware para parsear JSON
app.use(cors());

// Probar la conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('No se pudo conectar a la base de datos:', error));

// Usar las rutas de productos

app.use('/auth', authRoutes);
app.use('/carrito', carrito_Routes);
app.use('/categoria' , categoria_Routes);
app.use('/cliente' , clientes_Routes);
app.use('/condiciones' , condiciones_Routes);
app.use('/historial_compras' , auth.verificarToken,historial_compras_Routes);
app.use('/historial_ventas' , historial_ventas_Routes);
app.use('/informacion_pago', informacion_de_pago_routes);
app.use('/lista_de_deseados', lista_de_deseados_routes);
app.use('/pedidos', pedidos_routes);
app.use('/productos', productos_routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});