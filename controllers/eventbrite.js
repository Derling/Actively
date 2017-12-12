// EventBrite api 
const request = require('request-promise');
module.exports = (req, res) => {
  //const { lat, lon } = req.query;
  const options = {
    method: 'GET',
    url: "https://www.eventbriteapi.com/v3/events/search/?&expand=venue",
    qs: {
        // TODO API key should be hidden 
        token: 'ORH2LR2VEGPUPEX7XIN7',
    },
    json: true, // No need to parse 
  }
  request(options)
  .then( (response) =>{
      let events = response.events;
      const resp = [];
      for(event in events) {
        // some events do not contain their lat and lon, we can't use those
        if(events[event]["venue"]) {
          resp.push({
            event_id: events[event]["id"],
            url: events[event]["url"],
            event_name: events[event]["name"]["text"],
            description: events[event]["description"]["text"],
            coordinates: [events[event]["venue"]["longitude"], 
            events[event]["venue"]["latitude"]] // array containg lat and lon 
          });
        }
      }
      res.json(resp);
   })
  .catch( (error) => {console.log("Error in EventBrite request",error)});
};
