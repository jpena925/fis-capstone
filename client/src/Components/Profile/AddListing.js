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
                <form>
                    <div className='flex'>
                        <label htmlFor="">Address</label>
                        <input className='border-2' type="text" />
                    </div>
                </form> 
                : null}
        </div>
    </div>
  )
}

export default AddListing