import React, { useContext } from 'react'
import UserInfo from './UserInfo'
import FavoriteCont from './FavoriteCont'
import Property from './Property'
import { UserContext } from '../../App'
import AddListing from './AddListing'

function ProfilePage() {
    const user = useContext(UserContext)
    
  return (
    <div>
        <UserInfo />
        {user?.property ? <Property /> : <AddListing />}
        <FavoriteCont />
    </div>
  )
}

export default ProfilePage