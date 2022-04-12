import React, { useState } from 'react'

function AddListing() {
    const [showAddForm, setShowAddForm] = useState(false)

  return (
    <div className="grid grid-cols-5 mt-5 mb-20 h-80">
        <div className='item1 col-span-3 border-r-4 mx-20 pr-5'>
            <div className='flex justify-between mb-8'>
                <p className='text-lg font-semibold'>Your Listing:</p>
                <button className='border border-black ml-1 px-2' onClick={() => setShowAddForm(true)}>Add a Listing!</button>
            </div>
            {showAddForm ? 
                <form className=''>
                    <div className='flex'>
                        <label htmlFor="">Address:</label>
                        <input className='border-2 w-3/4' type="text" />
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Sq.Ft.:</label>
                        <input className='border-2 w-1/6' type="text" />
                    </div>
                    <div className='flex'>
                        <label htmlFor="" className='mr-6'>Bedrooms:</label>
                        <select name="BR">
                            <option value="Studio">Studio</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className='flex'>
                        <label htmlFor="" className='mr-6'>Bathrooms:</label>
                        <select name="BA">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Price: $</label>
                        <input className='border-2 w-1/6' type="text" />
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Date Available:</label>
                        <input className='border-2' type="date" />
                    </div>
                    <div className='flex'>
                        <label htmlFor="" className='mr-6'>Pets:</label>
                        <input type="checkbox" className='-ml-2' />
                    </div>
                    <div className=''>
                        <label htmlFor="" className='mr-6'>Features:</label>
                        <textarea className='block border w-64 resize-none'></textarea>
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Photos:</label>
                        <input className='border-2' type="text" />
                    </div>
                    <button type='submit' className='border border-black ml-1 px-2 mt-3' onClick={() => setShowAddForm(false)}>submit</button>
                </form> 
                : null}
        </div>
    </div>
  )
}

export default AddListing