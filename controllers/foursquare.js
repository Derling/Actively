const request = require('request-promise');
module.exports = (req, res) => {
  const { lat, lon } = req.query;
  const coordinates = lat+","+lon;
  const options = {
    method: 'GET',
    url: "https://api.foursquare.com/v2/venues/explore",
    qs: {
      // TODO API key should be hidden 
      client_id:"",
      client_secret:"", 
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
      console.log(response);
			let events = response.response.groups[0].items; // array of all events
      events.forEach( (event) => {
        console.log(event);
				resp.push({
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
