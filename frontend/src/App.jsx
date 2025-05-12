import './styles/index.css'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import PostPage from './components/PostPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='flex flex-col min-h-screen '>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/posts' element={<PostPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/profile' element={<h1>Perfil</h1>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
