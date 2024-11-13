const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const app = express();
const PORT = 3000;
const authRoutes = require('./routes/auth_routes');
const auth = require('./middlewares/authMiddleware');

app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('No se pudo conectar a la base de datos:', error));

// Usar las rutas de productos

app.use('/auth', authRoutes);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});