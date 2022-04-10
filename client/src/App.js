import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing.js'
import Homepage from './Components/Home/Homepage.js'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'
import ProfilePage from './Components/Profile/ProfilePage'
import PropertyPage from './Components/Property/PropertyPage.js'

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

  console.log(user)


  return (
    <UserContext.Provider value={user}>
    <NavBar setUser={setUser} />
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Homepage />} />
      <Route exact path='/profile' element={<ProfilePage />} />
      <Route exact path='/property/:id' element={<PropertyPage />} />
    </Routes>
    <Footer />
    </UserContext.Provider>
  )
}

export default App;
