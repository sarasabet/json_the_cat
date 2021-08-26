
const request = require('request');
const breeds = process.argv.slice(2).join('').slice(0,3)
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breeds}`;

const getCatByBreed = (breed) =>{
  if(breed === undefined || (!breed)) {
    console.log('Breed does not found ')
  } else {
    console.log('Breed description', breed)
  }
 
}
const breedFetcher = (callback, breeds) => {
  request(url, (error, response, body) => {

    if (error) {
      console.log('Error ocuured:', error)
    }
    const data = JSON.parse(body)
    const breed = data[0].description
    if (breed === undefined) {
      console.log('Breed does not exits ')
    }
    callback(breed)
  });
};

breedFetcher(getCatByBreed, breeds)
