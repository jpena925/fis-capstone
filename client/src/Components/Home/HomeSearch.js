import React from 'react'

function HomeSearch() {
  return (
    <div className='ml-10 mt-20 border-b-2 pb-5'>
        <form>
            <div className='flex'>
                <input className='border-2' placeholder='Zip Code Search'/>
                <button type='submit' className='border-2 w-14 h-8 ml-3 bg-blue-200 rounded-xl text-sm'>Search</button>
            </div>
            <div className='flex space-x-2 items-center'>
            <label htmlFor="BR">BR:</label>
            <select name="BR">
                <option value="Studio">Studio</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label htmlFor="BA">BA:</label>
            <select name="BA">
            <option value="">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <label htmlFor="price">Max Price:</label>
            <span className="currencyinput">$<input name="price" className='border-2 w-20' placeholder='1000'/></span>

            <label htmlFor="pets">Pets Allowed</label>
            <input name='pets' type='checkbox' />
            </div>
        </form>
    </div>
  )
}

export default HomeSearch