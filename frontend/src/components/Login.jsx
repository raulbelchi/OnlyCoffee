import React, { useState } from 'react';
import '../styles/estiloLogin.css'
import axios from 'axios'; //simplifica la realización de solicitudes HTTP
import { Link, useNavigate } from 'react-router-dom'; //para redirigir a otra página después de enviar el formulario

function Login() {

  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

  const comprobarLogin = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('Por favor, completa todos los campos.');
      return;
    } else {
        try {
          const response = await axios.post('http://localhost:3000/login', {
            email,
            password})

            if (response.data) {
              // Guardar el usuario en el localStorage
              localStorage.setItem('user', JSON.stringify(response.data));
              // Disparamos un evento para poder actualizar el header
              window.dispatchEvent(new Event('sesionCambiada'));
              //redirige a /posts si todo ha ido bien
              navigate('/posts')
            } else{
                alert('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
          }
    }
  }

  return (
    <div className='body font-lato'>
        <form class="form" onSubmit={comprobarLogin}>
        <h2 class="formTitle">Iniciar Sesión</h2>
        <p class="formParagraph">¿No tienes cuenta? <Link to="/register" class="formLink">Registrate</Link></p>

        <div class="formContainer">
            <div class="formGroup">
                <input type="text" id="email" class="formInput" placeholder=" " onChange={(e) => setEmail(e.target.value)}/>
                <label for="email" class="formLabel">Email:</label>
                <span class="formLine"></span>
            </div>
            <div class="formGroup">
                <input type="text" id="contraseña" class="formInput" placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
                <label for="contraseña" class="formLabel">Contraseña:</label>
                <span class="formLine"></span>
            </div>
            <input type="submit" class="formSubmit" value="login"/>
        </div>
    </form>
    </div>
  );
}

export default Login;