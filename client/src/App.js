import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing.js'
import Homepage from './Components/Home/Homepage.js'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'

export const UserContext = createContext()


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json()
        .then(user => setUser(() => user))
      }
    }) 
  }, [])


  return (
    <UserContext.Provider value={user}>
    <NavBar setUser={setUser} />
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Homepage />} />
    </Routes>
    <Footer />
    </UserContext.Provider>
  )
}

export default App;
