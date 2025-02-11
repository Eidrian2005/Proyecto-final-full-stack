import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/registro'
import Home from '../pages/home'
import Search from '../components/search';
import AdminPage from '../pages/admin/adminPage';
import Contactanos from '../pages/contactanos';
import Sobre_nosotros from '../pages/sobre_nosotros';
import CarritoPage from '../pages/carritoPage';
import Paypalpage from '../pages/paypalpage';
import PrivateRoute from '../components/PrivateRoutes';
import Perfil from '../pages/perfil';
import ListaDeseoPage from '../pages/listaDeseoPage';
import HistorialUsuario from '../pages/historialUsuario';

const Routing = () => {

return (
    <Router>
    <Routes>
        <Route path="/pago" element={<Paypalpage />} />
        <Route path="/" element={<Home />} />
        <Route path='/SobreNosotros' element={<Sobre_nosotros/>} />
        <Route path="/AdminTask"element={<PrivateRoute requiredRole="administrador"><AdminPage /></PrivateRoute>}/>
        <Route path='/search' element={<Search/>} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Historial" element={<HistorialUsuario />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Contactanos' element={<Contactanos/>}/>
        <Route path='/carrito' element={<CarritoPage/>}/>
        <Route path='/lista_de_deseados' element={<ListaDeseoPage/>}/>
    </Routes>
    </Router>
);
};


export default Routing;