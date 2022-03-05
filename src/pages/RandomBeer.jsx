import React, { useState, useEffect } from "react";
import { getRandomBeer } from "../services/beer";
import BeerDetails from "../components/BeerDetails";
const RandomBeer = () => {
  console.log("RandomBeer");
  const [beer, setBeer] = useState();

  useEffect(() => {
    const init = async () => {
      const responseBeer = await getRandomBeer();
      setBeer(responseBeer);
    };
    init();
  }, []);
  if (!beer) {
    return null;
  }
  const {
    image_url,
    name,
    contributed_by,
    tagline,
    first_brewed,
    attenuation_level,
    description,
  } = beer;
  return (
    <>
      <BeerDetails
        image_url={image_url}
        name={name}
        contributed_by={contributed_by}
        tagline={tagline}
        first_brewed={first_brewed}
        attenuation_level={attenuation_level}
        description={description}
      />
    </>
  );
};

export default RandomBeer;
