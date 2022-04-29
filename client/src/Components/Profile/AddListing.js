import React, { useState, useContext } from 'react'
import { UserContext } from '../../App'

function AddListing({setUser}) {
    const user = useContext(UserContext)
    const [showAddForm, setShowAddForm] = useState(false)
    const [addFormData, setAddFormData] = useState({
        address: '',
        zip: 0,
        sqft: 0,
        br: 0,
        ba: 1,
        price: 0,
        date_available: '',
        pets: false,
        features: '',
        image_url: []
    })
    const [errors, setErrors] = useState('')
    const [showErrors, setShowErrors] = useState(false)
    const [imageForm, setImageForm] = useState('')
    

    function handleAddPhoto(){
        setAddFormData(() => ({...addFormData, image_url: [...addFormData.image_url, imageForm]}))
        setImageForm('')
    }


    function handleAddFormSubmit(e){
        e.preventDefault()
        console.log(user)
        fetch('https://morning-oasis-53860.herokuapp.com/properties', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(addFormData)
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => setUser({...user, property: data}))
                setShowAddForm(() => false)
                setAddFormData(() => ({
                    address: '',
                    zip: 0,
                    sqft: 0,
                    br: 0,
                    ba: 1,
                    price: 0,
                    date_available: '',
                    pets: false,
                    features: '',
                    image_url: []
                }))
                setErrors('')
                setShowErrors(false)
            } else {
                r.json().then(data => setErrors(data.errors))
                setShowErrors(true)
            }
        })
    }

    const errorsMap = errors ? 
        errors.map(error => <p key={error} className='text-red-500'>{error}</p>) : null

    const imageLinks = addFormData.image_url.length > 0 ?
        addFormData.image_url.map(image => <p key={image} className='text-xs text-blue-400'>{image}</p>) : null

    return (
        <div className="grid grid-cols-5 mt-5 mb-20">
            <div className='item1 col-span-3 border-r-4 mx-20 pr-5'>
                <div className='flex justify-between mb-8'>
                    <p className='text-lg uppercase tracking-wider'>Your Listing:</p>
                    <button className='border border-black ml-1 px-2' onClick={() => setShowAddForm(true)}>Add a Listing!</button>
                </div>
                {showAddForm ? 
                    <form className='' onSubmit={handleAddFormSubmit}>
                        <div className='flex mb-2'>
                            <label htmlFor="">Address:</label>
                            <input 
                                className='border w-3/4 ml-1' 
                                type="text" 
                                onChange={(e) => setAddFormData({...addFormData, address: e.target.value})}
                                placeholder='123 1st St. Lafayette, LA 71234'/>
                        </div>
                        <div className='flex mb-2'>
                            <label htmlFor="">Zip Code:</label>
                            <input 
                                className='border ml-1' 
                                type="text" 
                                onChange={(e) => setAddFormData({...addFormData, zip: parseInt(e.target.value)})}
                                />
                        </div>
                        <div className='flex mb-1'>
                            <label htmlFor="">Sq.Ft.:</label>
                            <input 
                                className='border w-1/6 ml-1' 
                                type="text" 
                                onChange={(e) => setAddFormData({...addFormData, sqft: parseInt(e.target.value)})}/>
                        </div>
                        <div className='flex'>
                            <label htmlFor="" className='mr-6'>Bedrooms:</label>
                            <select name="BR" onChange={(e) => setAddFormData({...addFormData, br: parseInt(e.target.value)})}>
                                <option value="Studio">Studio</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className='flex'>
                            <label htmlFor="" className='mr-6 mb-2'>Bathrooms:</label>
                            <select name="BA" onChange={(e) => setAddFormData({...addFormData, ba: parseInt(e.target.value)})}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className='flex mb-2'>
                            <label htmlFor="">Price: $</label>
                            <input className='border w-1/6' type="text" onChange={(e) => setAddFormData({...addFormData, price: parseInt(e.target.value)})}/>
                        </div>
                        <div className='flex mb-1'>
                            <label htmlFor="">Date Available:</label>
                            <input className='border ml-1' type="date" onChange={(e) => setAddFormData({...addFormData, date_available: e.target.value})}/>
                        </div>
                        <div className='mb-1'>
                            <label htmlFor="" className='mr-6'>Pets Allowed:</label>
                            <input type="checkbox" className='-ml-2' onChange={(e) => setAddFormData({...addFormData, pets: e.target.checked})}/>
                        </div>
                        <div className=''>
                            <label htmlFor="" className=' mr-6'>Features:</label>
                            <textarea className='block border w-64 mb-1 resize-none' onChange={(e) => setAddFormData({...addFormData, features: e.target.value})}></textarea>
                        </div>
                        {imageLinks}
                        <div className='flex'>
                            <label htmlFor="">Photo (hosted URL):</label>
                            <input className='ml-1 border' type="text" value={imageForm} onChange={(e) => setImageForm(e.target.value)}/>
                            <button type="button" className='ml-1 border px-2 bg-black text-white' onClick={handleAddPhoto}>+</button>
                        </div>
                        <button type='submit' className='border border-black ml-1 px-2 mt-3' >submit</button>
                        {showErrors ? errorsMap : null}
                    </form> 
                    : null}
            </div>
        </div>
  )
}

export default AddListing