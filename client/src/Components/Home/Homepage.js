import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import UserBar from './UserBar'
import HomeSearch from './HomeSearch'
import CardContainer from './CardContainer'

function Homepage() {
    const [homeSearch, setHomeSearch] = useState(null)
    const [filters, setFilters] = useState({
        br: 0,
        ba: 0,
        price: 0,
        pets: false
    })
    const [feed, setFeed] = useState(null)

    function handleHomeSearch(e){
        e.preventDefault()
        console.log(homeSearch, filters)
    }

    useEffect(() => {
        fetch('/properties')
        .then(r => r.json())
        .then(data => setFeed(data))
    }, [])

    // /properties?search={homeSearch}&br={filters.br}&ba={filters.ba}&price={filters.price}&pets={filters.pets}


  return (
    <div className="grid grid-cols-4">
        <div className='item1 col-span-1 border-r-4 mx-5'>
            <UserBar />
        </div>
        <div className='item2 col-span-3'>
            <HomeSearch homeSearch={homeSearch} setHomeSearch={setHomeSearch} filters={filters} setFilters={setFilters} onHomeSearch={handleHomeSearch}/>
            <CardContainer feed={feed} setFeed={setFeed} />
        </div>
    </div>
  )
}

export default Homepage