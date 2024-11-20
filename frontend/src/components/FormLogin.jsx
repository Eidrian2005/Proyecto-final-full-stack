import React, { useState } from 'react';
import { Post_auth } from '../services/Postauth';
import { toast } from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom'




function FormLogin() {

  const navigate = useNavigate()
    const [usuario, setUsername] = useState('');
    const [contraseña, setPassword] = useState('');



  function  cargaUsuario(event) {
    setUsername(event.target.value);
    }

    const cargaContra = (event) => {
    setPassword(event.target.value);
    };


  const cargar = async (e) => {
    e.preventDefault()

  const users = await Post_auth(usuario, contraseña)

    if (users) {
      console.log("Inicio de sesión exitoso.");
      toast.success('Bienvenido',{
        autoClose: 700
      })
      setTimeout(() => {
        navigate("/")
      },1000);
      
      localStorage.setItem('Autenticado', 'true')
  } else {
      toast.warning('Usuario o contraseña incorrectos')
      console.log("Usuario o contraseña incorrectos.");
  }
  };

return (

  <div className="container">

    <div className="panel">

        <h2>Login</h2>

        <div>

            <form onSubmit={cargar} id="registroCuenta">

                <div className="form-grupo">
                    <label htmlFor="usuario1" className="form-label">Nombre:</label>

                    <input
                    className="estilosInput" 
                    type="text" 
                    id="usuario1" 
                    value={usuario}
                    placeholder='Ingrese su nombre'
                    onChange={cargaUsuario}
                    required/>

                </div>

                <div className="form-grupo">
                    <label htmlFor="Password1" className="" >Contraseña:</label>

                    <input  
                    className="estilosInput" 
                    type="password" 
                    id="Password1" 
                    name="password" 
                    value={contraseña}
                    placeholder='Ingrese contraseña'
                    onChange={cargaContra}
                    required />

                </div>

                <button className="btnestilo" type='submit' id="guardar">inicar sesion</button>
                
                

                <br/>
                <p>¿No tienes cuenta? <Link to="/Register">Crea una</Link></p>

            </form>

        </div>  

    </div>

</div>
);
}

export default FormLogin;