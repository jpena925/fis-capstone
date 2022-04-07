import React from 'react'
import Card from '../Card'

function CardContainer() {
  return (
    <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10">
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default CardContainer