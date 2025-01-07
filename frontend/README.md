## shedaboshop: Plataforma de venta
Eidrian y NiXon


- shedaboshop es una aplicacion de venta de productos varios el objetivo es apoyar y mejorar el sistema de venta del negocio de una persona y así impulsar su negocio

## Índice

- 1.Tecnologías utilizadas
- 2.Características
- 3.Estructura del Proyecto
- 4.Endpoints del Backend


## Backend

- Node.js: Entorno de ejecución para JavaScript.
- Express.js: Framework para la creación de APIs.
- Sequelize: ORM para la gestión de la base de datos.
- MySQL2: Cliente para conectarse a bases de datos MySQL.
- jsonwebtoken: Manejo de autenticación con tokens.
- dotenv: Manejo de variables de entorno.
- bcrypt/bcryptjs: Encriptación de contraseñas.
- cors: intercambio de recursos de origen cruzado


## Frontend

- React.js: Biblioteca para la construcción de interfaces de usuario.
- CSS: Estilización de componentes.
- font-awesome-icons: biblioteca de iconos vectoriales y estilos CSS
- react-bootstrap:  framework CSS front-end
- react-router-dom: biblioteca que permite crear rutas en aplicaciones React
- react-toastify: notificaciones temporales y discretas en aplicaciones React 
## Otros

- Git: Control de versiones.
- Postman: Pruebas de endpoints.
- VSCode: Entorno de desarrollo.
- MySQL: Base de datos

## Características

- Registro e inicio de sesión con autenticación segura.
- Gestión de productos, usuarios y compras.
- Sistema de compras segura.
- Sistema de correo para comunicacion directa con el administrador de la pagina.
- Panel de control para el administrador donde agrega, edita o elimina productos y categorias.


# Estructura del Proyecto

Shedaboshop/
├── Backend/                  # Backend
│   ├── config/               # Configuración de la base de datos
│   ├── Controllers/          # Controladores para cada funcionalidad
│   ├── db/                   # Configuración de Sequelize
│   ├── Middlewares/          # Middlewares de autenticación y validación
│   ├── Migrations/           # Migraciones de la base de datos
│   ├── Models/               # Modelos de la base de datos (Sequelize)
│   ├── Routes/               # Rutas de la API
│   ├── config.js             # configuracion del Token     
│   └── index.js              # servidor del backend
│
├── Shedaboshop/                 # Frontend
│   ├── public/               # Archivos estáticos
│   ├── src/
│   │   ├── Componentes/      # Componentes React
│   │   ├── assets/           # Imágenes y estilos
│   │   └── App.jsx           # Punto de entrada de React
│
├── .env                      # Variables de entorno
├── package.json              # Dependencias del proyecto
└── README.md                 # Documentación


## Endpoints del Backend


Autenticación
POST /api/auth/login: Inicia sesión y genera un token JWT.
POST /api/auth/register: Registra un nuevo usuario.

Usuarios
GET /api/clientes/:id: Obtiene información de un usuario.
PUT /api/clientes/:id: Actualiza información de un usuario.

productos
GET /api/productos: Lista de los productos.
POST /api/productos: Añade un nuevo producto.
PUt /api/productos: Actualiza un producto
DELETE /api/productos: Elimina un producto

Categorais
GET /api/categorias: Obtiene las categorias.
POST /api/categorias: Crea una nueva categoria.
GET /api/categorias: Obtiene las categorias.

Carrito
GET /api/carrito: Obtiene los artículos del carrito del usuario.
POST /api/carrito: Añade un artículo al carrito del usuario.
PUT /api/carrito/:id: Actualiza la cantidad de un artículo en el carrito.
DELETE /api/carrito/:id: Elimina un artículo del carrito del usuario.

Pedidos
GET /api/pedidos: Obtiene todos los pedidos del usuario.
GET /api/pedidos/:id: Obtiene información de un pedido específico.
POST /api/pedidos: Crea un nuevo pedido.
PUT /api/pedidos/:id: Actualiza un pedido.
DELETE /api/pedidos/:id: Elimina un pedido.

Lista de Deseados
GET /api/lista_de_deseados: Obtiene la lista de deseados del usuario.
POST /api/lista_de_deseados: Añade un artículo a la lista de deseados del usuario.
DELETE /api/lista_de_deseados/:id: Elimina un artículo de la lista de deseados del usuario.