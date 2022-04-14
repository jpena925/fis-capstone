import React, { useEffect, useState } from 'react'
import Carousel from '../Profile/Carousel'
import { useParams } from 'react-router-dom'

function PropertyPage() {
    const [property, setProperty] = useState(null)
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`/properties/${id}`)
        .then(r => r.json())
        .then(property => setProperty(property))
    }, [])

    console.log(property)
    return (
        <div>{property ?
            <div>
                <div className='mx-5 flex items-baseline justify-center mt-20 mb-5'>
                    <p className='text-2xl mr-4 '>{property.address}</p>
                    <p className='text-xl ml-4 '>${property.price} /mo.</p>
                </div>
                <div className='flex bg-blue-500 h-96 w-1/2 relative mx-auto'>
                    <Carousel images={property.images}/>
                </div> 
                <div className='flex justify-center'>
                    <p>{property.sqft} sq.ft.</p>
                    <p>Bedrooms: {property.br} / Bathrooms: {property.ba}</p>
                </div>
                <div className='flex justify-center'>
                    <p>Available: {property.date_available}</p>
                    <p>{property.pets ? 'Pets ✔️' : 'Pets ❌'} </p>
                </div>
                <div className='flex justify-center'>
                    <p>Additional Notes: {property.features}</p>
                </div>
                <div className='mt-10'>
                    <p className='flex justify-center'>Contact the Current Tenant(s):</p>
                    <p className='flex justify-center'>username: {property.user?.username}</p>
                    <p className='flex justify-center'>email: {property.user?.email}</p>
                    <p className='flex justify-center'>{property.user?.phone ? `phone: ${property.user.phone}` : null}</p>
                </div>
            </div>

            : null}
        </div>
    )
}

export default PropertyPage