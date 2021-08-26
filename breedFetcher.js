const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {

  request((url + breedName), (error, response, body) => {
    if (error) {
      callback(error, null);
    } 
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        callback(null, breed.description);
      } else {
        callback("breed not found")
      }
  });
};

module.exports = { fetchBreedDescription };