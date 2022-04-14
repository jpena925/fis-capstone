import React, { useState, useEffect } from 'react'
import Card from '../Card.js'
import Search from '../Search.js'
import kairos1 from '../../kairos1.png'



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
    <div className="py-20 max-h-screen bg-cover bg-center bg-no-repeat"  style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,.35)), url('https://images.unsplash.com/photo-1489370321024-e0410ad08da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"}}>
        <div className="container px-6 mt-40 mx-auto">
            <h2 className="text-5xl font-bold text-white mx-auto mb-2">kairos</h2>
            <h3 className="text-2xl mb-8 text-gray-100">Beat the landlords, find the home you deserve.</h3>
            <Search />
        </div>
    </div>
  <div className='bg-stone-100 pb-6 mt-16'>
    <div className="mt-1 flex pt-5 px-8 items-baseline justify-center">
        <h2 className="text-3xl text-black font-serif italic font-medium">kairos:</h2>
        <h2 className="text-lg text-gray-500 italic ml-3">'the right, critical, or opportune moment'</h2>
    </div>
      <p className='px-8 mt-8 text-sm'>Welcome to kairos. Here at kairos we know how difficult it can be to find somewhere to rent. There are so many listings to sift through that
        even if you find the right one, you're lucky to get a tour before it's signed for. That's where we come in. kairos is the place to list your current
        home and browse others' homes, with no strings attached. Whether you're sure you're moving or just interested in the idea of it, you can list your property, post pictures
        and communicate with others' about their homes. kairos is built with the renter in mind. Find your kairos, find your new home.
      </p>
    </div>
    

      <div className="mt-6 flex pt-5 justify-center">
        <h2 className="text-2xl text-gray-500 border-b-4">Recent Listings</h2>
      </div>

      <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {recentMap}
      </div>
    </>
  )
}

export default Landing