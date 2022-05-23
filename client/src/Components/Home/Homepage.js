import React, { useState, useEffect } from 'react'
import UserBar from './UserBar'
import HomeSearch from './HomeSearch'
import CardContainer from './CardContainer'

function Homepage({setUser}) {
    const [homeSearch, setHomeSearch] = useState('')
    const [filters, setFilters] = useState({
        br: -1,
        ba: -1,
        price: -1,
        pets: false,
        radius: 1
    })
    const [feed, setFeed] = useState(null)
    const [filtered, setFiltered] = useState(null)

    useEffect(() => {
        fetch('https://morning-oasis-53860.herokuapp.com/properties')
        .then(r => r.json())
        .then(data => setFeed(data))
    }, [])

  
    function handleHomeSearch(e){
        e.preventDefault()
        fetch(`https://morning-oasis-53860.herokuapp.com/filtered?search=${homeSearch}&radius=${filters.radius}&br=${filters.br}&ba=${filters.ba}&price=${filters.price}&pets=${filters.pets}`)
        .then(r => r.json())
        .then(data => setFiltered(data))
        setHomeSearch(() => '')
        setFilters(() => ({
            br: -1,
            ba: -1,
            price: -1,
            pets: false,
            radius: 1
        }))
    }


  return (
    <div className="grid grid-cols-4">
        <div className='item1 col-span-1 border-r-2 border-grey'>
            <UserBar />
        </div>
        <div className='item2 col-span-3'>
            <HomeSearch homeSearch={homeSearch} setHomeSearch={setHomeSearch} filters={filters} setFilters={setFilters} onHomeSearch={handleHomeSearch}/>
            <CardContainer feed={feed} setFeed={setFeed} filtered={filtered} setUser={setUser}/>
        </div>
    </div>
  )
}

export default Homepage