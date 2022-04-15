import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();

    function handleZipSearch(e){
        e.preventDefault()
        navigate(`/home?search=${search}`)
    }

    return (
        <form className="flex" onSubmit={handleZipSearch}>
            <input 
                type="text" 
                className="w-1/3 mr-5 border-green-500 text-gray-700 block px-3 py-4 rounded" 
                placeholder="Enter a zip code to get started"
                onChange={(e) => setSearch(e.target.value)}
                value={search} />
            <button type="submit" className="text-white shadow-lg uppercase border-2 px-8 py-4 font-extrabold tracking-wider">Explore</button>
        </form>
    )
}

export default Search