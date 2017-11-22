const request = require('request-promise');
module.exports = (req, res) => {
  const { lat, lon } = req.query;
  const options = {
    method: 'GET',
    url: "https://api.meetup.com/2/open_events?",
    qs: {
        // TODO API key should be hidden 
        key: '5b496e111b404d173f3c1c3414e31b',
        lat: lat,
        lon:lon,
        sign:true,
    },
  }
  /* Asynchronous Operation */
	request(options)
  .then( (response) =>{
		  const resp = []
			let events = JSON.parse(response).results; // array of all events
			for(event in events){ // parse relevant data
				resp.push({
					event_id: events[event]['group']['id'],
					event_name: events[event]["name"],					
					url: events[event]["event_url"],
					description: events[event]["description"],
					coordinates: [ events[event]["group"]["group_lon"],events[event]["group"]["group_lat"] ],
				});
			};
			res.json(resp);
	})
  .catch( (error) => {console.log("Error in Meetup request")});
};
