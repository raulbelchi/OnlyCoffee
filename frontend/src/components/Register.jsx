import React from 'react';
import '../styles/estiloRegister.css'

function Register() {
  return (
    <div className='body font-lato'>
        <form class="form">
            <h2 class="formTitle">Crear una cuenta</h2>
            <p class="formParagraph">¿Ya tienes cuenta? <a href="" class="formLink">Inicia Sesión</a></p>

            <div class="formContainer">
                <div class="formGroup">
                    <input type="text" id="name" class="formInput" placeholder=" "/>
                    <label for="name" class="formLabel">Nombre:</label>
                    <span class="formLine"></span>
                </div>
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
                <div class="formGroup">
                    <input type="text" id="repetirContraseña" class="formInput" placeholder=" "/>
                    <label for="repetirContraseña" class="formLabel">Repetir Contraseña:</label>
                    <span class="formLine"></span>
                </div>

                <input type="submit" class="formSubmit" value="Registrarse"/>
            </div>
        </form>
    </div>
  );
}

export default Register;