import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'

function Card({ props }) {

  return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src="" alt="" />
            <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">{props?.address}</div>
                <img src={props?.images[0].image_url} alt='card pic' />
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block text-blue-300 font-bold text-sm px-3 py-1 mr-2 mb-2">${props?.price}</span>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props?.br} Beds</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props?.ba} Baths</span>
            </div>
            <div className="flex px-6 pt-4 pb-10">
                <Link className="inline-block bg-slate-500 rounded-full px-4 py-1 font-bold text-white mr-2 mb-2" to={`/property/${props.id}`}>View Property</Link>
                <button className='ml-5 rounded-full px-2'><AiOutlineHeart /></button>
            </div>
        </div>
  )
}

export default Card