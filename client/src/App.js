import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing.js'


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
    </Routes>
  )
}

export default App;
