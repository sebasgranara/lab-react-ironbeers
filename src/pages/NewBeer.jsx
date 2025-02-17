import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewrs_tips, setBrewrs_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      tagline,
      description,
      first_brewed,
      brewrs_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then((response) => {
        console.log(response);
        navigate("/beers");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      NewBeer
      <form onSubmit={handleSubmit}>
        <h2>Name:</h2>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <h2>Tagline:</h2>
        <input
          type="text"
          value={tagline}
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
        ></input>
        <h2>Description:</h2>
        <input
          type="text"
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <h2>First Brewed:</h2>
        <input
          type="text"
          value={first_brewed}
          name="first_brewed"
          onChange={(e) => setFirst_brewed(e.target.value)}
        ></input>
        <h2>Tips:</h2>
        <input
          type="text"
          value={brewrs_tips}
          name="brewrs_tips"
          onChange={(e) => setBrewrs_tips(e.target.value)}
        ></input>
        <h2>Attenuation Level:</h2>
        <input
          type="number"
          value={attenuation_level}
          name="attenuation_level"
          onChange={(e) => setAttenuation_level(e.target.value)}
        ></input>
        <h2>Contributed By:</h2>
        <input
          type="text"
          value={contributed_by}
          name="contributed_by"
          onChange={(e) => setContributed_by(e.target.value)}
        ></input>
        <button>New beer</button>
      </form>
    </div>
  );
}
export default NewBeer;

// import React,{useState,useEffect} from "react";
// import {newBeer} from '../services/beer';
// const NewBeer = () => {
//     const [formdata,setFormData]=useState({
//         name:"",
//         tagline:"",
//         description:"",
//         first_brewed:"",
//         brewers_tips:"",
//         attenuation_level:0,
//         contributed_by:""
//     })
//     const [error,setError]=useState();
//   return (
//     <>
//       <form onSubmit={async (e)=>{
//           e.preventDefault();
//           if(name||tagline||description||first_brewed||brewers_tips||attenuation_level||contributed_by){
//             await newBeer(formdata);
//             setError(null);
//           }
//           else{
//               setError("Invalid ..");
//           }
//       }}>
//         {error && <p>{error}</p>} 
//         <div>
//           <label>Name</label>
//           <input type="text" id="name" value={formdata.name} onChange={(e)=>{
//               const currentValue= e.currentTarget.value;
//               setFormData(prev=>({...prev,name:currentValue}))
//           }}/>
//         </div>
//         <div>
//           <label>Tagline</label>
//           <input type="text" id="tagline" value={formdata.tagline} onChange={(e)=>{
//               const currentValue= e.currentTarget.value;
//               setFormData(prev=>({...prev,tagline:currentValue}))
//           }}/>
//         </div>
//         <div>
//           <label>Description</label>
//           <input type="text" id="description" value={formdata.description} onChange={(e)=>{
//               const currentValue= e.currentTarget.value;
//               setFormData(prev=>({...prev,description:currentValue}))
//           }}/>
//         </div>
//         <div>
//           <label>First Brewed</label>
//           <input type="text" id="first_brewed" value={formdata.first_brewed} onChange={(e)=>{
//               const currentValue= e.currentTarget.value;
//               setFormData(prev=>({...prev,first_brewed:currentValue}))
//           }}/>
//         </div>

//         <div>
//           <label>Breweres Tipos</label>
//           <input type="text" id="brewers_tips" value={formdata.brewers_tips} onChange={(e)=>{
//               const currentValue= e.currentTarget.value;
//               setFormData(prev=>({...prev,brewers_tips:currentValue}))
//           }}/>
//         </div>
//         <div>
//           <label>Attenuation Level</label>
//           <input type="text" id="attenuation_level" value={formdata.attenuation_level} onChange={(e)=>{
//               const currentValue= e.currentTarget.value;
//               setFormData(prev=>({...prev,attenuation_level:currentValue}))
//           }}/>
//         </div>
//         <div>
//           <label>Contributed By</label>
//           <input type="text" id="contributed_by" value={formdata.contributed_by} onChange={(e)=>{
//               const currentValue= e.currentTarget.value;
//               setFormData(prev=>({...prev,contributed_by:currentValue}))
//           }}/>
//         </div>
//         <input type="submit" value="Create"/>
//       </form>
//     </>
//   );
// };

// export default NewBeer;
