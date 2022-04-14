import React, { useContext, useState, useEffect } from 'react'
import UserInfo from './UserInfo'
import FavoriteCont from './FavoriteCont'
import Property from './Property'
import { UserContext } from '../../App'
import AddListing from './AddListing'

function ProfilePage({setUser}) {
    const user = useContext(UserContext)
    const [property, setProperty] = useState({})

    useEffect(() => {
        setProperty(user?.property)
    }, [user])

    function handleDeleteProperty(){
        fetch(`/properties/${user?.property.id}`, {
            method: 'DELETE'
        })
        .then(() => setProperty(null))
    }
    
    
  return (
    <div>
        <UserInfo setUser={setUser}/>
        {property ? <Property handleDeleteProperty={handleDeleteProperty} property={property} setProperty={setProperty}/> : <AddListing setUser={setUser}/>}
        <FavoriteCont />
    </div>
  )
}

export default ProfilePage