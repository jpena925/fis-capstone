import React, { useContext } from 'react'
import Card from '../Card'
import { UserContext } from '../../App'

function FavoriteCont() {
    const user = useContext(UserContext)

    
    const cardMap = user ?
        user.favorites.map(fav => <Card key={fav.id} props={fav.property}/>) : <p>No Favorites Yet</p>

  return (
    <div className='my-10 mx-16'>
        <p className='text-lg uppercase tracking-wider'>Your Favorites:</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-6">
            {cardMap}
        </div>
    </div>
  )
}

export default FavoriteCont