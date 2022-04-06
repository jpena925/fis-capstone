import React from 'react'

function Card() {
  return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src="" alt="" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Name</div>
                <p className="text-gray-700">Description</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block text-blue-300 font-bold text-sm px-3 py-1 mr-2 mb-2">Price</span>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Beds</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Baths</span>
            </div>
            <div className="px-6 pt-4 pb-10">
                <button className="inline-block bg-slate-500 rounded-full px-4 py-1 font-bold text-white mr-2 mb-2">View Property</button>
            </div>
        </div>
  )
}

export default Card