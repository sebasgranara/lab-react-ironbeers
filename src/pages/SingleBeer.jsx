import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {findBeerById} from '../services/beer'
import BeerDetails from '../components/BeerDetails';

function SingleBeer () {
  console.log("SingleBeer");
  const {beerId}= useParams();
  const [beer,setBeer]=useState();
  useEffect(
      ()=>{
          const init= async()=>{
              const responseBeer= await findBeerById(beerId);
              setBeer(responseBeer);
          }
          init();
      },
      [beerId]
  )
  if(!beer){
      return null;
  }
  const {image_url,name,contributed_by,tagline,first_brewed,attenuation_level,description}=beer;
  return (
    <>
     <BeerDetails image_url={image_url} name={name} contributed_by={contributed_by} tagline={tagline} first_brewed={first_brewed} attenuation_level={attenuation_level} description={description}/>
    </>
  )
}

export default SingleBeer