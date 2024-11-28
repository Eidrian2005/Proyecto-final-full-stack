import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/registro'
import Tarjeta_de_credito from '../pages/tarjeta_de_credito';
import Home from '../pages/home'
import Search from '../components/search';
import AdminPage from '../pages/admin/adminPage';
import Contactanos from '../pages/contactanos';

const Routing = () => {

return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/AdminTask' element={<AdminPage/>}/>
        <Route path='/search' element={<Search/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tarjeta_de_credito" element={<Tarjeta_de_credito />} />
        <Route path='/Contactanos' element={<Contactanos/>}/>
    </Routes>
    </Router>
);
};


export default Routing;