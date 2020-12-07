import React from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './components/GlobalStyle'
import Home from './pages/Home'

function App () {
  return (
    <>
     <GlobalStyle />
      <Home/>
      <Navbar />
      
    </>
  )
}

export default App
