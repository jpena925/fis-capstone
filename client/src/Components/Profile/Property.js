import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import Carousel from './Carousel'

function Property() {
    const user = useContext(UserContext)
    const [property, setProperty] = useState({})
    const [editProperty, setEditProperty] = useState(false)

    useEffect(() => {
        if(user && user.property){
        fetch(`properties/${user.property.id}`)
        .then(r => r.json())
        .then(data => setProperty(data))
        }
    }, [user])

    function handleSubmitEditProperty(){
        console.log('hi')
        setEditProperty(() => false)
    }

    
  return (
    <div className="grid grid-cols-4 mt-5 mb-20 h-80">
    <div className='item1 col-span-2 border-r-4 mx-20 pr-5'>
        <div>
            <div className='flex justify-between mb-8'>
                <div>
                <p className='text-lg font-semibold'>Your Listing:</p>
                </div>
                
                <div>
                <button className='border border-black mr-1 px-2' onClick={() => setEditProperty(true)}>edit</button>
                <button className='border border-black ml-1 px-2'>delete</button>
                </div>
            </div>
            {editProperty ? 
                <form onSubmit={handleSubmitEditProperty}>
                    <div className='flex'>
                        <label htmlFor="" className='mr-5'>Address:</label>
                        <input type="text" className='border w-64' />
                    </div>
                    <div classname='flex'>
                        <label htmlFor="" className='mr-6'>Sq. Ft.:</label>
                        <input type="text" className='border w-20' />
                    </div>
                    <div classname='flex'>
                        <label htmlFor="" className='mr-6'>Price: $</label>
                        <input type="text" className='border w-20 -ml-1' />
                    </div>
                    <div classname='flex'>
                        <label htmlFor="" className='mr-6'>Bedrooms:</label>
                        <select name="BR">
                            <option value="Studio">Studio</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div classname='flex'>
                        <label htmlFor="" className='mr-6'>Bathrooms:</label>
                        <select name="BA">
                            <option value="">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div classname='flex'>
                        <label htmlFor="" className='mr-6'>Pets:</label>
                        <input type="checkbox" className='-ml-2' />
                    </div>
                    <div classname='flex'>
                        <label htmlFor="" className='mr-6'>Date Available:</label>
                        <input type="date" className='border w-40' />
                    </div>
                    <div classname=''>
                        <label htmlFor="" className='mr-6'>Features:</label>
                        <textarea className='block border w-64 resize-none'></textarea>
                    </div>
                    <button type='submit' className='px-2 border border-black block mt-3'>Submit</button>
                </form>
            :
                <div>
                    <p>{property?.address}</p>
                    <p>{property?.sqft} sq.ft.</p>
                    <p>${property?.price} </p>
                    {/* <p>Landlord Verified: {property.landlord ? '✅' : '❎'}</p> */}
                    <p>{`${property?.br} Bedroom / ${property?.ba} Bath`}</p>
                    <p>Pets: {property?.pets ? 'Yes' : 'No'}</p>
                    <p>Date Available: {property?.date_available}</p>
                    <p>Features: {property?.features}</p>
                </div>
            }
        </div>
    </div>
    <div className='item2 col-span-2'>
        <div className='w-5/6 h-full select-none relative'>
            <Carousel images={property?.images}/>
        </div>
    </div>
</div>  
  )
}

export default Property