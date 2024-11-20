import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/registro'


const Routing = () => {

return (
    <Router>
    <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
    </Routes>
    </Router>
);
};


export default Routing;