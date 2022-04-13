import React, { useState } from 'react'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai'


let count = 0;
function Carousel({ images }) {
    const [currIndex, setCurrIndex] = useState(0)

    

    function handleOnNextClick(){
        count = (count + 1) % images.length
        setCurrIndex(() => count)
    }

    function handleOnPreviousClick(){
        const imgLen = images.length
        count = (currIndex + imgLen - 1) % imgLen;
        setCurrIndex(count)
    }
    
    console.log(images)
    return (
        <div>
            <div className="aspect-w-16 aspect-h-9">
            {images?.length ? <img className='absolute w-full h-full' src={images[currIndex]?.image_url} /> : <img className='absolute w-full h-full' src='https://homes.madeeasy.app/img/no-propertyfound.png' alt='card pic' />}
            </div>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center static">
                <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnPreviousClick}><AiOutlineVerticalRight size={30}/></button>
                <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30}/></button>
            </div>
        </div>
    )
}

export default Carousel