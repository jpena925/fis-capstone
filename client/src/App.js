import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing.js'
import Homepage from './Components/Home/Homepage.js'


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Homepage />} />
    </Routes>
  )
}

export default App;
