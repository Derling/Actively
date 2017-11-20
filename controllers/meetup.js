const request = require("request");

module.exports = function(req, res) {
	const { lat, lon } = req.query;
	let url =
		"https://api.meetup.com/2/open_events?key=5b496e111b404d173f3c1c3414e31b&photo-host=public&lat="+ lat +"&lon=" + lon + "&page=100&sign=true";
	request(url, function(error, response, body) {
		var resp = []
		if(!error && response && response["statusCode"]) {
			let events = JSON.parse(body).results; // array of all events
			for(event in events){ // parse relevant data
				resp.push({
					event_id: events[event]['group']['id'],
					event_name: events[event]["name"],					
					url: events[event]["event_url"],
					description: events[event]["description"],
					lat: events[event]["group"]["group_lat"],
					lon: events[event]["group"]["group_lon"],
					coordinates: [ events[event]["group"]["group_lon"],events[event]["group"]["group_lat"] ],
					//position:[events[event]["group"]["group_lat"],events[event]["group"]["group_lon"]],
					//icon: 'marker',
					//size: 24, 
					//color: [255, 0, 0]
				});
			};
			res.json(resp);
		};
	});
};
