import React, { useContext, useState } from 'react'
import { UserContext } from '../../App'

function UserInfo() {
    const [editContact, setEditContact] = useState(false)
    const user = useContext(UserContext)


    function handleEditContactSubmit(){
        setEditContact(() => false)
    }

    return (
        <div className="mx-20 mt-10">
            <div>
                <h1 className='text-3xl mb-5'>{user?.username}</h1>
            </div>
            <div>
                <div className='flex'>
                    <p>Contact Info:</p>
                    <button className='ml-64 px-2 border border-black' onClick={() => setEditContact(true)}>edit</button>
                </div>
                <p>email: {user?.email}</p>
                {editContact ? 
                    <form onSubmit={handleEditContactSubmit}>
                        <div className='flex'>
                        <label htmlFor="" className='mr-5'>phone:</label>
                        <input type="text" className='border' />
                        </div>
                        <div classname='flex'>
                        <label htmlFor="" className='mr-6'>zip code:</label>
                        <input type="text" className='border w-40' />
                        </div>
                        <button type='submit' className='px-2 border border-black block mt-3'>Submit</button>
                    </form>
                :
                    <>
                    <p>phone: {user?.phone}</p>
                    <p>zip code: {user?.zip}</p>
                    </>
                }
            </div>
        </div>  
    )
}

export default UserInfo