import React, { useEffect, useState } from 'react'
import Carousel from '../Profile/Carousel'
import { useParams } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function PropertyPage({user, setUser}) {
    const [property, setProperty] = useState(null)
    const favIDs = user && user.favorites ? user.favorites.map(fav => fav.property.id) : null
    const { id } = useParams()
    const [liked, setLiked] = useState(favIDs && favIDs.includes(parseInt(id)))
    
    useEffect(() => {
        fetch(`/properties/${id}`)
        .then(r => r.json())
        .then(property => setProperty(property))
    }, [])

    function handleLike(type){
        if (type === 'like'){
            fetch('/favorites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user.id,
                    property_id: parseInt(id)
                })
            })
            .then(r => r.json())
            .then(data => setUser(user => ({...user, favorites:[...user.favorites, {id: data.id, property: data.property}]})))
            setLiked(true)
        } else {
            let unlikeID = user?.favorites.find(p => p.property.id === parseInt(id)).id
            console.log(unlikeID)
            fetch(`/favorites/${unlikeID}`, {
                method: 'DELETE'
            })
            .then(setUser(user => ({...user, favorites: user.favorites.filter(fav => fav.property.id !== parseInt(id))})))
            setLiked(false)
        }
    }
    
    return (
        <div>{property ?
            <div className='mx-auto'>
                <div className='space-x-10 flex items-baseline justify-center mt-20 mb-2'>
                    <p className='text-2xl mr-4 font-bold uppercase tracking-wide'>{property.address}</p>
                    <p className='text-xl ml-4 uppercase tracking-wider'>${property.price} /mo.</p>

                </div>
                <div className='flex justify-center'>
                    {liked ? 
                    <div className='flex pb-4'>
                        <p className='uppercase text-sm'>Favorited</p>
                        <button className='ml-5 rounded-full px-2' onClick={() => handleLike('dislike')}><AiFillHeart /></button>
                    </div> :
                    <div className='flex pb-4'>
                        <p className='uppercase text-sm'>Add To Favorites</p>
                        <button className='ml-5 rounded-full px-2' onClick={() => handleLike('like')}><AiOutlineHeart /></button>
                    </div> }
                </div>
                <div className='flex bg-gray-200 border-8 h-96 w-1/2 relative mx-auto'>
                    <Carousel images={property.images}/>
                </div> 
                <div className='flex justify-center mt-2 space-x-4'>
                    <p className=''>{property.sqft} sq.ft.</p>
                    <p className=''>{property.br} BR / {property.ba} BA</p>
                </div>
                <div className='flex mt-2 space-x-4 justify-center'>
                    <p className=''>Date Available: {property.date_available}</p>
                    <p className=''>{property.pets ? 'Pets: Yes 🐶' : 'Pets: ❌'} </p>
                </div>
                <div className='flex justify-center mt-2'>
                    <p>Features: {property.features}</p>
                </div>
                <div className='mt-10'>
                    <p className='flex justify-center uppercase tracking-wide font-medium underline'>Contact the Current Tenant(s):</p>
                    <p className='flex justify-center mt-2 text-sm'>username: {property.user?.username}</p>
                    <p className='flex justify-center text-sm'>email: {property.user?.email}</p>
                    <p className='flex justify-center text-sm'>{property.user?.phone ? `phone: ${property.user.phone}` : null}</p>
                </div>
            </div>

            : null}
        </div>
    )
}

export default PropertyPage