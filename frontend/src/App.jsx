import React from 'react'
import '../public/styles/index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Title from './components/Title'
import Info from './components/info'
import PostPage from './components/PostPage'

function App() {
  return (
    <div className='flex flex-col items-center m-o p-0'>
      <Header />
      
      <PostPage/>
      
    {/*
      <Title />
      <Info />
      */}
      
      <Footer />
    </div>
  )
}

export default App
