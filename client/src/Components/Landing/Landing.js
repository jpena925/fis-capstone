import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar.js'
import Footer from '../Footer.js'
import Card from '../Card.js'
import Search from '../Search.js'



function Landing() {
  const [recent, setRecent] = useState(null)

  useEffect(() => {
    fetch('/recent')
    .then(r => r.json())
    .then(data => setRecent(data))
  }, [])

  const recentMap = recent ? 
    recent.map(property => <Card key={property.id} props={property}/>) : null

  return (
    <>
    <div className="py-20 max-h-screen bg-cover bg-center bg-no-repeat"  style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,.5)), url('https://i.ibb.co/j3x9Yh0/spencer-everett-1h112-EKg-BLE-unsplash.jpg')"}}>
        <div className="container px-6 mt-40 mx-auto">
            <h2 className="text-4xl font-bold text-white mx-auto mb-2">Rentr</h2>
            <h3 className="text-2xl mb-8 text-gray-200">Beat the landlords, find the home you deserve.</h3>
            <Search />
        </div>
    </div>
    

      <div className="mt-20 flex p-10 justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Recent Listings</h2>
      </div>

      <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {recentMap}
      </div>
    </>
  )
}

export default Landing