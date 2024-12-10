import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/registro'
import Tarjeta_de_credito from '../pages/tarjeta_de_credito';
import Home from '../pages/home'
import Search from '../components/search';
import AdminPage from '../pages/admin/adminPage';
import Contactanos from '../pages/contactanos';
import Sobre_nosotros from '../pages/sobre_nosotros';
import CarritoPage from '../pages/carritoPage';
import Paypalpage from '../pages/paypalpage';
const Routing = () => {

return (
    <Router>
    <Routes>
        <Route path="/pago" element={<Paypalpage />} />
        <Route path="/" element={<Home />} />
        <Route path='/SobreNosotros' element={<Sobre_nosotros/>} />
        <Route path='/AdminTask' element={<AdminPage/>}/>
        <Route path='/search' element={<Search/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tarjeta_de_credito" element={<Tarjeta_de_credito />} />
        <Route path='/Contactanos' element={<Contactanos/>}/>
        <Route path='/carrito' element={<CarritoPage/>}/>
    </Routes>
    </Router>
);
};


export default Routing;