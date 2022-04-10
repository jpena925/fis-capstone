import React from 'react'
import UserInfo from './UserInfo'
import FavoriteCont from './FavoriteCont'
import Property from './Property'

function ProfilePage() {
    
  return (
    <div>
        <UserInfo />
        <Property />
        <FavoriteCont />
    </div>
  )
}

export default ProfilePage