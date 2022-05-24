import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { UserContext } from '../App'

function Card({ props, setUser }) {
    const user = useContext(UserContext)
    const [userFavorites, setUserFavorites] = useState(user?.favorites)
    const userLikes = user ? userFavorites?.map(like => like.property?.id) : null
    

    function handleLike(type){
        if(type === 'like'){
            fetch('https://morning-oasis-53860.herokuapp.com/favorites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id: user.id, property_id: props.id})
            })
            .then(r => r.json())
            .then(data => {
                setUserFavorites([...userFavorites, {id: data.id, property: data.property}])
                setUser({...user, favorites: [...userFavorites, {id: data.id, property: data.property}]})
            })
            
        } else {
            const favId = userFavorites.find(el => el.property.id === props.id).id
            fetch(`https://morning-oasis-53860.herokuapp.com/favorites/${favId}`, {
                method: 'DELETE',
            })
            .then(setUserFavorites([...userFavorites.filter(fav => fav.id !== favId)]))
            .then(setUser({...user, favorites: [...userFavorites.filter(fav => fav.id !== favId)]}))
        }
    }


    return (
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src="" alt="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-md mb-2">{props?.address}</div>
                    {props?.images.length ? <img src={props?.images[0]?.image_url} alt='card pic' /> : <img src='https://homes.madeeasy.app/img/no-propertyfound.png' alt='card pic' />}
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block text-blue-300 font-bold text-md px-3 mr-2 mb-2">${props?.price}</span>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props?.br} Beds</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props?.ba} Baths</span>
                </div>
                <div className="flex px-6 pt-4 pb-10">
                    <Link className="inline-block bg-slate-500 rounded-full px-4 py-1 font-bold text-white mr-2 mb-2" to={`/kairos/property/${props?.id}`}>View Property</Link>
                        {user ?
                        <div>
                        {userLikes?.includes(props?.id) ? 
                        <button className='ml-5 rounded-full px-2' onClick={() => handleLike('dislike')}><AiFillHeart /></button> :
                        <button className='ml-5 rounded-full px-2' onClick={() => handleLike('like')}><AiOutlineHeart /></button>
                        }
                        </div> 
                        : null}
                </div>
            </div>
    )
}

export default Card