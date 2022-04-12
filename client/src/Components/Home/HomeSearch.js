import React from 'react'

function HomeSearch({ homeSearch, setHomeSearch, filters, setFilters, onHomeSearch }) {



    return (
        <div className='ml-10 mt-20 border-b-2 pb-5'>
            <form onSubmit={onHomeSearch}>
                <div className='flex'>
                    <input type='number' className='border-2' placeholder='Zip Code Search' onChange={(e) => setHomeSearch(() => parseInt(e.target.value))}/>
                    <button type='submit' className='border-2 w-14 h-8 ml-3 bg-blue-200 rounded-xl text-sm'>Search</button>
                </div>
                <div className='flex space-x-2 items-center'>
                <label htmlFor="BR">BR:</label>
                <select name="BR" onChange={(e) => setFilters({...filters, br: parseInt(e.target.value)})}>
                    {/* unsure about this */}
                    <option value="-1">Any</option>
                    <option value="0">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <label htmlFor="BA">BA:</label>
                <select name="BA" onChange={(e) => setFilters({...filters, ba: parseInt(e.target.value)})}>
                <option value="-1">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <label htmlFor="price">Max Price:</label>
                <span className="currencyinput">
                    $<input 
                    name="price" 
                    className='border-2 w-20' 
                    placeholder='1000'
                    onChange={(e) => setFilters({...filters, price: parseInt(e.target.value)})}
                    />
                </span>

                <label htmlFor="pets">Pets Allowed</label>
                <input name='pets' type='checkbox' onChange={(e) => setFilters({...filters, pets: e.target.checked})}/>
                </div>
            </form>
        </div>
    )
}

export default HomeSearch