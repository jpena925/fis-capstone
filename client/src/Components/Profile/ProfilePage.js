import React, { useContext, useState } from 'react'
import UserInfo from './UserInfo'
import FavoriteCont from './FavoriteCont'
import Property from './Property'
import { UserContext } from '../../App'
import AddListing from './AddListing'

function ProfilePage() {
    const user = useContext(UserContext)
    const [property, setProperty] = useState({})

    function handleDeleteProperty(){
        fetch(`/properties/${user?.property.id}`, {
            method: 'DELETE'
        })
        .then(() => setProperty(null))
    }
    
  return (
    <div>
        <UserInfo />
        {user?.property ? <Property handleDeleteProperty={handleDeleteProperty} property={property} setProperty={setProperty}/> : <AddListing />}
        <FavoriteCont />
    </div>
  )
}

export default ProfilePage