import React from 'react'
import '../public/styles/index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Title from './components/Title'

function App() {
  console.log("App cargada");
  return (
    <>
      <Header />
      <Title />
      <Footer />
    </>
  )
}

export default App
