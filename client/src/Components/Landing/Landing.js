import React from 'react'
import NavBar from '../NavBar.js'



function Landing() {

  return (
    <>
    <NavBar />
    <div className=" py-20 max-h-screen bg-cover bg-center bg-no-repeat"  style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,.2)), url('https://i.ibb.co/j3x9Yh0/spencer-everett-1h112-EKg-BLE-unsplash.jpg')"}}>
        <div className="container mx-auto px-6 mt-40">
            <h2 className="text-4xl font-bold text-white mb-2">Welcome to website</h2>
            <h3 className="text-2xl mb-8 text-gray-200">Whats good</h3>
            <button className="text-white shadow-lg uppercase border-2 px-8 py-4 font-bold tracking-wider">Explore Locations</button>
        </div>
    </div>
    </>
  )
}

export default Landing