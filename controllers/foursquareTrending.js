const request = require('request-promise');
module.exports = (req, res) => {
  const { lat, lon } = req.query;
  const coordinates = lat+","+lon;
  const options = {
    method: 'GET',
    //url: "https://api.foursquare.com/v2/venues/explore",
    url: "https://api.foursquare.com/v2/venues/trending",
    qs: {
      // TODO API key should be hidden 
      client_id:"",
      client_secret:"", 
      v:"20170101", 
      near:	"new york new york"
    },
    json:true,
  }
	request(options)
  .then( (response) =>{
		  const resp = []
			let events = response.response.venues; // array of all events
      events.forEach( (event) => {
          console.log(event);
				resp.push({
          name: event.name,
          tips: event.hereNow.summary,
          coordinates:[event.location.lng,event.location.lat],
        });
      });
			res.json(resp);
	})
  .catch( (error) => {console.log("Error in foursquare request",error.StatusCodeError,error)});
};
