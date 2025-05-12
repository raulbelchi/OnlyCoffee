import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [user, setUser] = useState(localStorage.getItem('user'));

  // Uso useEffect para capturar el evento de cuando se inicia sesion y actualizar el header
  useEffect(() => {

    const actualizarEstado = () => {
      setUser(localStorage.getItem('user'))
    }

    window.addEventListener('sesionCambiada', actualizarEstado)

    return () => {
      window.removeEventListener('userChanged', actualizarEstado);
  };
  }, []);

  return (
    <div 
      className='flex flex-row justify-between items-center bg-coffee text-white h-20
      font-cooper fixed w-full z-50'
    >
      {/* Uso un operador ternario para comprobar si hay un usuario en el localStorage*/}
      {
        user ? (
          <>
            <Link to='/posts'>
                <img src='images/Logo-OC-blanco.svg' alt="logo" className='h-20 !ml-5'></img>
            </Link>
              
            <ul className='flex flex-col md:flex-row !mr-20 gap-x-4 text-lg md:text-xl'>
              <Link to='/profile'>
                <li> Perfil </li>
              </Link>

              <Link to='/login'>
                <li onClick={() => {
                  localStorage.removeItem('user')
                  setUser(null)
                }}> 
                  Cerrar Sesión 
                </li>
              </Link>
            </ul>
          </>
      ) : 
      (
        <>
          <Link to='/'>
            <img src='images/Logo-OC-blanco.svg' alt="logo" className='h-20 !ml-5'></img>
          </Link>
          
          <ul className='flex flex-col md:flex-row !mr-20 gap-x-4 text-lg md:text-xl'>
            <Link to='/register'>
              <li> Registrarse </li>
            </Link>
            <Link to='/login'>
              <li> Iniciar Sesión </li>
            </Link>
          </ul>
        </>
      )}
    </div>
  );
}

export default Header;