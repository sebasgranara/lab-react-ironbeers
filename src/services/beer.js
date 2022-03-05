export const getAllBeers = async () => {
  const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
  const responseJSON = await response.json();
  return responseJSON;
};
export const findBeerById = async (id) => {
  const response = await fetch(
    `https://ih-beers-api2.herokuapp.com/beers/${id}`
  );
  const responseJSON = await response.json();
  return responseJSON;
};
export const getRandomBeer = async () => {
  const response = await fetch(
    `https://ih-beers-api2.herokuapp.com/beers/random`
  );
  const responseJSON = await response.json();
  return responseJSON;
};
export const newBeer = async ({
  name,
  tagline,
  description,
  first_brewed,
  brewers_tips,
  attenuation_level,
  contributed_by,
}) => {
  const options = {
    method: "post",
    body: JSON.stringify({
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    }),
  };
  const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/new`,options);
  const responseJSON= await response.json();
  return responseJSON;
};
