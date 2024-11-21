import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/registro'
import Tarjeta_de_credito from '../pages/tarjeta_de_credito';


const Routing = () => {

return (
    <Router>
    <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tarjeta_de_credito" element={<Tarjeta_de_credito />} />
    </Routes>
    </Router>
);
};


export default Routing;