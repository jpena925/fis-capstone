import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'

function UserBar() {
    const user = useContext(UserContext)
    const [favorites, setFavorites] = useState(user?.favorites)

    useEffect(() => {
        setFavorites(user?.favorites)
    }, [user])

    const favoriteMap = user ?
        user?.favorites.map(fav => 
            <Link to={`/property/${fav.property?.id}`} 
                key={fav.id} 
                className='text-xs block mr-5 mt-5 underline text-blue-400 hover:text-blue-700'>
            {fav.property?.address}
            </Link>) : null

    
    return (
            <div className='mr-1'>
                {user ? 
                <>
                <div>
                    <p className='text-xl font-semibold mt-10 mb-3'>Welcome,</p>
                    <Link className='mx-5 text-3xl mt-3 mb-3 underline text-blue-400 hover:text-blue-700' to={'/profile'}>{user?.username}</Link>
                </div>
                <div>
                    <p className='mt-12 text-lg mb-2'>Current Listing:</p>
                    {user?.property ?
                    <Link className='text-sm mb-3 underline text-blue-400 hover:text-blue-700' to={`/property/${user?.property?.id}`}>{user?.property.address}</Link> : <p>No Listing</p> }
                </div>
                <div>
                    <p className='mt-8 text-lg mb-3'>Contact Info:</p>
                    <p className='text-sm'>email: {user?.email}</p>
                    <p className='text-sm'>phone: {user?.phone}</p>
                </div>
                <div>
                    <p className='mt-5 text-lg'>Favorites:</p>
                    {favoriteMap}
                </div>
                </>
            :                 
            <>
            <div>
                <p className='text-xl font-semibold mt-10 mb-3'>Welcome!</p>
                <Link className='mx-5 text-2xl mt-3 mb-3 underline text-blue-200' to={'/'}>Please Log In</Link>
            </div>
            <div className='mr-5'>
                <p className='mt-8'></p>
                <p>Join kairos today to list your current rental and keep track of your favorite listings!</p>
            </div>
            </> }

            </div>            
    )
}

export default UserBar