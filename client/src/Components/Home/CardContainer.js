import React, { useEffect, useState, useContext } from 'react'
import Card from '../Card'
import { UserContext } from '../../App'

function CardContainer() {
    const user = useContext(UserContext)
    const [feed, setFeed] = useState(null)
    // const [zip, setZip] = useState(user.zip)

    useEffect(() => {
        fetch('/properties')
        .then(r => r.json())
        .then(data => setFeed(data))
    }, [])


    const feedMap = feed && user ? 
        feed.filter(property => property?.zip === parseInt(user?.zip)).map(property => <Card key={property.id} props={property}/>) 
        : null

    return (
        <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10">
            {feedMap}
        </div>
    )
}

export default CardContainer