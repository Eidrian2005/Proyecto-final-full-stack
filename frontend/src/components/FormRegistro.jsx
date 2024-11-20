import React, { useState  } from 'react';
import { Post_clientes } from '../services/PostClientes'
import {Link, useNavigate} from 'react-router-dom'

function FormRegister() {

    const navigate = useNavigate()
    const [usuario, setUsername] = useState('');
    const [correo, setEmail] = useState('');
    const [contraseña, setPassword] = useState('');
    const [imagen, setIMagen] = useState('')
    const [direccion, setDireccion] = useState('')

    function cargaImagen(event) {
        setIMagen(event.target.value)
    }

    function cargarDireccion(event) {
        setDireccion(event.target.value);
    }

    function  cargaUsuario(event) {
    setUsername(event.target.value);
    }

    function cargaEmail(event) {
    setEmail(event.target.value);
    }

    const cargaContra = (event) => {
    setPassword(event.target.value);
    };

    const cargar = (e) => {
        e.preventDefault()
        console.log('Valores a enviar:', {
            direccion,
            imagen,
            usuario,
            correo,
            contraseña,
          });
        Post_clientes(direccion,
            imagen,
            usuario,
            correo,
            contraseña,);
            navigate("/Login")
};



return(

    <div className="">

    <div className="">

        <h2>Registro</h2>

        <div className="">

            <form className="Donde termina esto?" onSubmit={cargar} id="">

                <div>
                <input
                type="file"
                name="Imagen"
                id=""
                // onChange={(event) => {
                //     const file = event.target.files[0];
                //     if (file) {
                //     const reader = new FileReader();
                //     reader.onload = (e) => {
                //         const base64Image = e.target.result;
                //         setImagen(base64Image); // Actualiza el estado con la imagen en base64
                //     };
                //     reader.readAsDataURL(file);
                //     }
                // }}
                />
                </div>

                <div className="">
                    <label htmlFor="usuario1" className="form-label">Nombre:</label>

                    <input 
                    className="" 
                    type="text" 
                    id="" 
                    value={usuario}
                    placeholder='Ingrese su nombre'
                    onChange={cargaUsuario}
                    required/>

                </div>

                <div className="">
                    <label htmlFor="Email1" className="">Correo electronico:</label>

                    <input 
                    className="" 
                    type="email" 
                    id=""
                    value={correo}
                    placeholder='Ingrese su correo electronico'
                    onChange={cargaEmail}
                    required />

                </div>

                <div className="">
                    <label htmlFor="" className="">direccion</label>

                    <input 
                    className="" 
                    type="text" 
                    id=""
                    value={direccion}
                    placeholder='Ingrese su correo electronico'
                    onChange={cargarDireccion}
                    required />

                </div>

                <div className="">
                    <label htmlFor="Password1" className="" >Contraseña:</label>

                    <input  
                    className="" 
                    type="password" 
                    id="" 
                    value={contraseña}
                    placeholder='Ingrese contraseña'
                    onChange={cargaContra}
                    required />

                </div>

                <button className="" type='submit' id="">Crear cuenta</button>

                

                <br/>
                <p>¿Ya tienes cuenta? <Link to="/Login">Inicia Sesion</Link></p>

            </form>

        </div>  

    </div>

</div>
)

}

export default FormRegister;