import React from 'react'

function BeerDetails ({image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by}) {
  return (
    <>
     <img src={image_url} alt=""/>
     <p>{name}</p>
     <p>{tagline}</p>
     <p>{first_brewed}</p>
     <p>{attenuation_level}</p>
     <p>{description}</p>
     <p>{contributed_by}</p>
    </>
  )
}

export default BeerDetails