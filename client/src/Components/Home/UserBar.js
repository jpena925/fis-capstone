import React, { useContext } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'

function UserBar() {
    const user = useContext(UserContext)

    console.log(user)
    const favoriteMap = user?.favorites ?
        user.favorites.map(fav => 
            <Link to={`/property/${fav?.property.id}`} 
                key={fav?.id} 
                className='text-xs block mr-5 mt-5 underline text-blue-500'>
            {fav?.property.address}
            </Link>) 
            : null
    
    return (
            <div>
                {user ? 
                <>
                <div>
                    <p className='text-xl font-semibold mt-10 mb-3'>Welcome,</p>
                    <Link className='mx-5 text-2xl mt-3 mb-3 underline text-blue-200' to={'/profile'}>{user?.username}</Link>
                </div>
                <div>
                    <p className='mt-8'>Current Listing:</p>
                    {user?.property ?
                    <Link className='text-sm mb-3 underline text-blue-500' to={`/property/${user?.property.id}`}>{user?.property.address}</Link> : <p>No Listing</p> }
                </div>
                <div>
                    <p className='mt-10'>Contact Info:</p>
                    <p>{user?.email}</p>
                    <p>{user?.phone}</p>
                </div>
                <div>
                    <p className='mt-5'>Favorites:</p>
                    {favoriteMap}
                </div>
                </>
            :                 <>
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