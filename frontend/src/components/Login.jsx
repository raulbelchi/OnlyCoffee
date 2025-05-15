import { useState } from 'react';
import '../styles/estiloLogin.css'
import axios from 'axios'; //simplifica la realización de solicitudes HTTP
import { Link, useNavigate } from 'react-router-dom'; //para redirigir a otra página después de enviar el formulario

function Login() {

  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[mensajeError, setMensajeError] = useState('')

  const navigate = useNavigate();

  const cambiarMensaje = (mensaje) => {
    setMensajeError(mensaje)
  }

  const comprobarLogin = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      cambiarMensaje('Por favor, completa todos los campos.')
      return;
    }

    //Con este Try comprobamos si las credenciales coinciden en la base de datos
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });

      // Guardar el usuario en el localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
      // Disparamos un evento para poder actualizar el header
      window.dispatchEvent(new Event('sesionCambiada'));
      //redirige a /MainPage si todo ha ido bien
      navigate('/MainPage')

    } catch (error) {
        cambiarMensaje(error.response.data.message)
      }
    
  }

  return (
    <div className='body font-lato'>
        <form className="form" onSubmit={comprobarLogin}>
        <h2 className="formTitle">Iniciar Sesión</h2>
        <p className="formParagraph">¿No tienes cuenta? <Link to="/register" className="formLink">Registrate</Link></p>

        <div className="formContainer">
            <div className="formGroup">
                <input type="text" id="email" className="formInput" placeholder=" " onChange={(e) => setEmail(e.target.value)}/>
                <label for="email" className="formLabel">Email:</label>
                <span className="formLine"></span>
            </div>
            <div className="formGroup">
                <input type="password" id="contraseña" className="formInput" placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
                <label for="contraseña" className="formLabel">Contraseña:</label>
                <span className="formLine"></span>
            </div>
            <input type="submit" className="formSubmit" value="Iniciar Sesión"/>

            {/* Para mostrar el mensaje de error en caso de que los datos no sean correctos */}
            {mensajeError && (
              <label className="text-red-600">{mensajeError}</label>
            )}
        </div>
    </form>
    </div>
  );
}

export default Login;