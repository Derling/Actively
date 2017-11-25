const request = require('request-promise');
module.exports = (req, res) => {
  const {client_id,client_secret,lat, lon } = req.query;
  const coordinates = lat+","+lon;
  const options = {
    method: 'GET',
    url: "https://api.foursquare.com/v2/venues/explore",
    qs: {
      // TODO API key should be hidden 
      client_id:client_id,
      client_secret:client_secret, 
      v:"20170101", 
      ll:coordinates,
      novelty:	'new',
      radius:	100000,
    },
    json:true,
  }
	request(options)
  .then( (response) =>{
		  const resp = []
			let events = response.response.groups[0].items; // array of all events
      events.forEach( (event) => {
				resp.push({
					foursquare_id: event.venue.id,
          name: event.venue.name,
          venue: event.venue.rating,
          tips: event.tips[0].text,
          coordinates:[event.venue.location.lng,event.venue.location.lat],
        });
      });
			res.json(resp);
	})
  .catch( (error) => {console.log("Error in foursquare explore request",error.message)});
};
