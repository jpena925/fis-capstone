import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../App'

function UserInfo() {
    const userLoggedIn = useContext(UserContext)
    const [showEditContact, setShowEditContact] = useState(false)
    const [editContact, setEditContact] = useState({
        phone: '',
        zip: ''
    })
    const [showErrors, setShowErrors] = useState(false)
    const [errors, setErrors] = useState(null)
    const [user, setUser] = useState(userLoggedIn)
    
    useEffect(() => {
        setUser(userLoggedIn)
    }, [userLoggedIn])


    function handleEditContactSubmit(e){
        e.preventDefault()
        setShowErrors(() => false)
        fetch(`/users/${user?.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editContact)
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => setUser(data))
                setShowEditContact(() => false)
                setEditContact(() => ({
                    phone: '',
                    zip: ''
                }))
            } else {
                r.json().then(data => setErrors(() => data.errors))
                setShowErrors(true)
            }
        })
    }

    console.log(showErrors)
    const errorsMap = errors ? 
        errors.map(error => <p key={error} className='text-red-500'>{error}</p>) : null

    return (
        <div className="mx-20 mt-10">
            <div>
                <h1 className='text-3xl mb-5'>{user?.username}</h1>
            </div>
            <div>
                <div className='flex'>
                    <p>Contact Info:</p>
                    <button className='ml-64 px-2 border border-black' onClick={() => setShowEditContact(true)}>edit</button>
                </div>
                <p>email: {user?.email}</p>
                {showEditContact ?
                    <div> 
                    <form onSubmit={handleEditContactSubmit}>
                        <div className='flex'>
                        <label htmlFor="" className='mr-5'>phone:</label>
                        <input 
                            type="text" 
                            className='border' 
                            onChange={(e) => setEditContact({...editContact, phone: e.target.value})}
                            value={editContact.phone}/>
                        </div>
                        <div className='flex'>
                        <label htmlFor="" className='mr-6'>zip code:</label>
                        <input 
                            type="text" 
                            className='border w-40' 
                            onChange={(e) => setEditContact({...editContact, zip: e.target.value})}
                            value={editContact.value}/>
                        </div>
                        <button type='submit' className='px-2 border border-black block mt-3'>Submit</button>
                        {showErrors ? errorsMap : null}
                    </form>
                    </div>
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