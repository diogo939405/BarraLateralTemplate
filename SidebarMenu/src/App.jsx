/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MenuAtivo from './menu/MenuAtivo'

function App() {
  return (
    <Router>
      <MenuAtivo style={{'margin':'0px', 'padding':'0px'}}/>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Home />} /> {/* Define a rota inicial */}
    </Routes>
  </Router>
    
  )
}

export default App
