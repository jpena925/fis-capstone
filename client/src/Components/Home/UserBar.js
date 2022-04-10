import React, { useContext } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'

function UserBar() {
    const user = useContext(UserContext)

    return (
            <div>
                <div>
                    <p className='text-xl font-semibold mt-10'>Welcome,</p>
                    <Link className='mx-5 text-2xl mt-3 mb-3 underline text-blue-200' to={'/profile'}>{user?.username}</Link>
                </div>
                <div>
                    <p className='mt-5 mb-5'>Current Listing:</p>
                </div>
                <div>
                    <p className='mt-10'>Contact Info:</p>
                    <p>{user?.email}</p>
                    <p>{user?.phone}</p>
                </div>
                <div>
                    <p className='mt-5'>Favorites:</p>
                </div>
            </div>
    )
}

export default UserBar