import React, { useEffect, useState, useContext } from 'react'
import Card from '../Card'
import { UserContext } from '../../App'
import { useLocation } from 'react-router-dom'

function CardContainer({feed, setFeed, filtered}) {
    const user = useContext(UserContext)
    let { search } = useLocation();
      search = (search.replace(/\D/g,''))



    const feedMap = filtered ?  
        filtered.map(property => <Card key={property.id} props={property}/>)
        :
        feed?.filter(property => property?.zip === parseInt(user?.zip || search)).map(property => <Card key={property.id} props={property}/>) 
        
    
    return (
        <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10">
            {feedMap}
        </div>
    )
}

export default CardContainer