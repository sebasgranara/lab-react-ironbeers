import React from 'react'
import {Link} from 'react-router-dom'

function Beer ({id,image,name,tagline,contributed_by}) {
  return (
    <Link to={`/beers/${id}`}>
    <div className="Beer">
        <img src={image} alt=""/>
        <p>{name}</p>
        <p>{tagline}</p>
        <p>Created by: {contributed_by}</p>
    </div>
    </Link>

  )
}

export default Beer