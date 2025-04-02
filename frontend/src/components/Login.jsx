import React from 'react';
import '../styles/estiloLogin.css'

function Login() {
  return (
    <div className='body font-lato'>
        <form class="form">
        <h2 class="formTitle">Iniciar Sesión</h2>
        <p class="formParagraph">¿No tienes cuenta? <a href="" class="formLink">Registrate</a></p>

        <div class="formContainer">
            <div class="formGroup">
                <input type="text" id="email" class="formInput" placeholder=" "/>
                <label for="email" class="formLabel">Email:</label>
                <span class="formLine"></span>
            </div>
            <div class="formGroup">
                <input type="text" id="contraseña" class="formInput" placeholder=" "/>
                <label for="contraseña" class="formLabel">Contraseña:</label>
                <span class="formLine"></span>
            </div>
            <input type="submit" class="formSubmit" value="Registrarse"/>
        </div>
    </form>
    </div>
  );
}

export default Login;