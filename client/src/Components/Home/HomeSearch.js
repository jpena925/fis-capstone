import React from 'react'

function HomeSearch({ homeSearch, setHomeSearch, filters, setFilters, onHomeSearch }) {


    return (
        <div className='mt-10 pt-5 border-b-2 border-black pb-6'>
            <form onSubmit={onHomeSearch}>
                <div className='flex mx-10 mb-2'>
                    <input type='number' className='border border-black pl-1' value={homeSearch} placeholder='Zip Code Search' onChange={(e) => setHomeSearch(() => parseInt(e.target.value))}/>
                    <label htmlFor='radius' className=' ml-2 mr-2 uppercase'>Mile Radius</label>
                    <input name='radius' type='number' min='1' className='border border-black w-8 pl-1' placeholder='1' onChange={(e) => setFilters({...filters, radius: parseInt(e.target.value)})}></input>
                    <button type='submit' className='border border-black  ml-3 bg-blue-50 font-medium px-2 text-sm'>Search</button>
                </div>
                <div className='mx-10 flex space-x-3 items-center'>
                <label htmlFor="BR" className='uppercase'>BR:</label>
                <select name="BR"  onChange={(e) => setFilters({...filters, br: parseInt(e.target.value)})}>
                    {/* unsure about this */}
                    <option value="-1">Any</option>
                    <option value="0">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <label htmlFor="BA" className='uppercase'>BA:</label>
                <select name="BA" onChange={(e) => setFilters({...filters, ba: parseInt(e.target.value)})}>
                <option value="-1">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <label htmlFor="price" className='uppercase'>Max Price:</label>
                <span className="currencyinput">
                    $ <input 
                    name="price" 
                    className='border border-black w-20 pl-1' 
                    placeholder='1000'
                    onChange={(e) => setFilters({...filters, price: parseInt(e.target.value)})}
                    />
                </span>

                <label htmlFor="pets" className='uppercase'>Pets Allowed</label>
                <input name='pets' type='checkbox' onChange={(e) => setFilters({...filters, pets: e.target.checked})}/>
                </div>
            </form>
        </div>
    )
}

export default HomeSearch