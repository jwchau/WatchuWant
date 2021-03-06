const express = require("express");
const router = express.Router();
const axios = require('axios');

const yelpKey = require('../../frontend/src/config/keys').yelpAPIKey;
const yelpUrl = 'https://api.yelp.com/v3/businesses/search'; 
// const yelpUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'; 

router.get('/', (req, res) => {
  let {location, latitude, longitude, categories, limit, price, term, radius, rating} = req.query;
  const config = {
    headers: {'Authorization': `Bearer ${yelpKey}`},
    params: {
      location,
      latitude,
      longitude,
      categories,
      limit, price, term, radius, rating
    }
  };

  axios.get(yelpUrl, config)
    .then( ans => res.jsonp(ans.data) )
    .catch( errors => res.status(422).json(errors));
});

router.get('/restaurant', (req, res) => {
  let { id } = req.query
  const config = {
    headers: {'Authorization': `Bearer ${yelpKey}`},
    params: {
      id: id //id of restaurant
    }
  };

  axios.get(`https://api.yelp.com/v3/businesses/${id}`, config)
    .then( ans => res.jsonp(ans.data) )
    .catch( errors => res.jsonp(errors) );
});


module.exports = router;