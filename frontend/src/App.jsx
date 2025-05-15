import './styles/index.css'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import MainPage from './components/MainPage'
import Profile from './components/Profile'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='flex flex-col min-h-screen '>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/mainpage' element={<MainPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
