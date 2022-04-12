import React, { useEffect, useState, useContext } from 'react'
import Card from '../Card'
import { UserContext } from '../../App'

function FavoriteCont() {
    const user = useContext(UserContext)
    const [wholeUser, setWholeUser] = useState(null)

    useEffect(() => {
        if(user){
        fetch(`/users/${user.id}`)
        .then(r => r.json())
        .then(wholeUser => setWholeUser(wholeUser))
        }
    }, [user])

    console.log(wholeUser?.favorites)

    
    const cardMap = wholeUser ?
        wholeUser.favorites.map(fav => <Card key={fav.id} props={fav.property}/>) : <p>No Favorites Yet</p>

  return (
    <div>
        <p className='mx-20'>Your Favorites:</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-6 mx-20">
            {cardMap}
        </div>
    </div>
  )
}

export default FavoriteCont