import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import UserBar from './UserBar'
import HomeSearch from './HomeSearch'
import CardContainer from './CardContainer'

function Homepage() {
  return (
    <div className="grid grid-cols-4 h-screen">
        <div className='item1 col-span-1 border-r-4 mx-5'>
            <UserBar />
        </div>
        <div className='item2 col-span-3'>
            <HomeSearch />
            <CardContainer />
        </div>
    </div>
  )
}

export default Homepage