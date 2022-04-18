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
                className='text-xs block mr-5 mt-5  text-gray-500 hover:text-blue-600'>
            {fav.property?.address}
            </Link>) : null
    
    return (
            <div className=''>
                {user ? 
                <>
                <div className='ml-5'>
                    <p className=' text-xl font-semibold mt-10 mb-3'>Welcome,</p>
                    <Link className=' text-3xl mt-3 mb-3 underline text-blue-400 hover:text-blue-600' to={'/profile'}>{user?.username}</Link>
                </div>
                <div className='border-t mt-8'></div>
                <div className='mx-5 mt-10'>  
                    <p className='text-md mb-2 uppercase tracking-wider font-medium'>Current Listing:</p>
                    {user?.property ?
                    <Link className='text-sm mb-3 underline text-gray-500 hover:text-blue-600' to={`/property/${user?.property?.id}`}>{user?.property.address}</Link> : <p>No Listing</p> }
                </div>
                <div className='ml-5'>
                    <p className='mt-10 text-md mb-3 uppercase tracking-wider font-medium'>Contact Info:</p>
                    <p className='text-sm'>email: {user?.email}</p>
                    <p className='text-sm'>phone: {user?.phone}</p>
                </div>
                <div className='ml-5'>
                    <p className='mt-10 text-md uppercase tracking-wider font-medium'>Favorites:</p>
                    {favoriteMap}
                </div>
                </>
            :                 
            <>
            <div className='mx-5 mb-3'>
                <p className='text-xl font-semibold mt-10 mb-3'>Welcome!</p>
                <Link className=' text-2xl mt-3 underline text-blue-200' to={'/'}>Please Log In</Link>
            </div>
            <div className='mx-5'>
                <p className='mt-8'></p>
                <p>Join kairos today to list your current rental and keep track of your favorite listings!</p>
            </div>
            </> }

            </div>            
    )
}

export default UserBar