import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import UserBar from './UserBar'
import HomeSearch from './HomeSearch'
import CardContainer from './CardContainer'

function Homepage({setUser}) {
    const [homeSearch, setHomeSearch] = useState(null)
    const [filters, setFilters] = useState({
        br: -1,
        ba: -1,
        price: -1,
        pets: false
    })
    const [feed, setFeed] = useState(null)
    const [filtered, setFiltered] = useState(null)

    useEffect(() => {
        fetch('/properties')
        .then(r => r.json())
        .then(data => setFeed(data))
    }, [])
  
    function handleHomeSearch(e){
        e.preventDefault()
        console.log(filters.pets)
        fetch(`/filtered?search=${homeSearch}&br=${filters.br}&ba=${filters.ba}&price=${filters.price}&pets=${filters.pets}`)
        .then(r => r.json())
        .then(data => setFiltered(data))
        setHomeSearch(() => null)
        setFilters(() => ({
            br: -1,
            ba: -1,
            price: -1,
            pets: false
        }))
    }


  return (
    <div className="grid grid-cols-4">
        <div className='item1 col-span-1 border-r-4 mx-5'>
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