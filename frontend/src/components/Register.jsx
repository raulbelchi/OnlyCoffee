import React, { useState } from 'react';
import '../styles/estiloRegister.css'
import axios  from 'axios'; //simplifica la realización de solicitudes HTTP
import { Link, useNavigate } from 'react-router-dom'; //para redirigir a otra página después de enviar el formulario

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const[mensajeError, setMensajeError] = useState('')

    const navigate = useNavigate();

    const cambiarMensaje = (mensaje) => {
        setMensajeError(mensaje)
    }

    //Expresiones regulares para validar los campos
    const regexUsername = /^[a-zA-Z0-9_]{3,16}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const enviarFormulario = async (e) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario

        //Validamos los campos
        if (username === '' || email === '' || password === '' || repeatPassword === '') {
            cambiarMensaje('Por favor, completa todos los campos.');
            return;
        } else if (!regexUsername.test(username)) {
            cambiarMensaje('El nombre de usuario debe tener entre 3 y 16 caracteres y solo puede contener letras, números y guiones bajos.');
            return;
        } else if (!regexEmail.test(email)) {
            cambiarMensaje('El correo electrónico no es válido.');
            return;
        } else if (!regexPassword.test(password)) {
            cambiarMensaje('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
            return;
        } else if (password !== repeatPassword) {
            cambiarMensaje('Las contraseñas no coinciden.');
            return;
        } else {
            try {
                const response = await axios.post('http://localhost:3000/users', {
                    username,
                    email,
                    password
                });
                // Guardar el usuario en el localStorage
                localStorage.setItem('user', JSON.stringify(response.data));
                // Disparamos un evento para poder actualizar el header
                window.dispatchEvent(new Event('sesionCambiada'));
                //Redirige a /mainpage si todo ha ido bien
                navigate('/mainpage')

            } catch (error) {
                console.error('Error al enviar el formulario:', error);
            }
        }
    }

    return (
        <div className="body font-lato">
            <form className="form" onSubmit={enviarFormulario}>
                <h2 className="formTitle">Crear una cuenta</h2>
                <p className="formParagraph">
                    ¿Ya tienes cuenta? 
                    <Link to="/login" className="formLink">Inicia Sesión</Link>
                </p>

                <div className="formContainer">
                    <div className="formGroup">
                        <input
                            type="text"
                            id="name"
                            className="formInput"
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="formLabel">Nombre:</label>
                        <span className="formLine"></span>
                    </div>

                    <div className="formGroup">
                        <input
                            type="email"
                            id="email"
                            className="formInput"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="formLabel">Email:</label>
                        <span className="formLine"></span>
                    </div>

                    <div className="formGroup">
                        <input
                            type="password"
                            id="contraseña"
                            className="formInput"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="formLabel">Contraseña:</label>
                        <span className="formLine"></span>
                    </div>

                    <div className="formGroup">
                        <input
                            type="password"
                            id="repetirContraseña"
                            className="formInput"
                            placeholder=" "
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        <label className="formLabel">Repetir Contraseña:</label>
                        <span className="formLine"></span>
                    </div>

                    <input type="submit" className="formSubmit" value="Registrarse" />

                    {/* Para mostrar el mensaje de error en caso de que los datos no sean correctos */}
                    {mensajeError && (
                    <label className="text-red-600">{mensajeError}</label>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Register;