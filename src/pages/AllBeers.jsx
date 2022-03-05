import React,{useEffect,useState} from 'react'
import {getAllBeers} from '../services/beer'
import Beer from '../components/Beer';

function AllBeers() {
  const [beers,setBeers]= useState([]);
  useEffect(
      ()=>{
          const init=async()=>{
              const responseBeers= await getAllBeers();
              setBeers([...responseBeers]);
          }
          init();
      },
      []
  )
  return (
    <>
      {
          beers?.map(
              ({image_url,_id,name,tagline,contributed_by},i)=>{
                  return <Beer image={image_url} id={_id} name={name} tagline={tagline} contributed_by={contributed_by}/>
              }
          )
      }
    </>
  )
}

export default AllBeers