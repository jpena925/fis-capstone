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
    fetch('https://morning-oasis-53860.herokuapp.com/me').then(r => {
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
      <Route exact path="/kairos/" element={<Landing />} />
      <Route exact path="/kairos/home" element={<Homepage setUser={setUser}/>} />
      <Route exact path='/profile' element={<ProfilePage setUser={setUser} />} />
      <Route exact path='/property/:id' element={<PropertyPage user={user} setUser={setUser}/>} />
    </Routes>
    <Footer />
    </UserContext.Provider>
  )
}

export default App;
