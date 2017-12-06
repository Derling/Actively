import React from 'react';

/* On Hover Inline Style */
const tooltipStyle = {
  position: 'absolute',
  padding: '10px',
  background: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  maxWidth: '300px',
  fontSize: '15px',
  zIndex: 9,
  pointerEvents: 'none',
	wordWrap: 'break-word',
};
const createMarkup = (item) => { return {__html: item}; };

/* TODO Very lazy plz modularize into functions */
const renderHoveredItems = (state) => {
    const {x, y, hoveredObject} = state;
    if (!hoveredObject ) {
      return null;
    }

		const items=[hoveredObject];
		const wrapWord = {wordWrap: 'break-word'};
		if(hoveredObject.foursquare_id) {
			return (
        <div style={{...tooltipStyle, left: x, top: y}}>
        <div>Foursquare information</div>
						{items.map(item => 
							<div key={item.foursquare_id}>
							<div>{item.name}</div>
							<div>{item.venue}</div>
							<div style={wrapWord}>{item.tips}</div>
							</div>
					)};
				</div>
			);
			}
    else if(hoveredObject.event_id) {
      return ( 
          <div style={{...tooltipStyle, left: x, top: y}}> 
            <div>Meetup information</div> 
						<div></div> 
						{items.map(item => <div style={wrapWord} key={item.event_id}>
						<div>{item.event_name}</div>
						<div style={wrapWord}>
             <div dangerouslySetInnerHTML={createMarkup(item.description)} />
            </div>
						<div>{item.url}</div>
					  </div>
            )}
      	</div>
       ); 
      }

      else if(hoveredObject.crime_robberies_id) {
          return (
          <div style={{...tooltipStyle, left: x, top: y}}> 
            <div>Crime Info</div> 
						{items.map(item => <div style={wrapWord} key={item.crime_robberies_id}>
             <div dangerouslySetInnerHTML={createMarkup(item.Title)} />
             <div dangerouslySetInnerHTML={createMarkup(item.description)} />
            </div>
            )}
	    </div>
      );
      }
  else if(hoveredObject.eventbrite_id) {

      return ( <div style={{...tooltipStyle, left: x, top: y}}> 
        <div>Event Brite Info</div> 
        {items.map(item => <div style={wrapWord} key={item.eventbrite_id}>
             <div dangerouslySetInnerHTML={createMarkup(item.event_name)} />
            </div>
        )}
	    </div>
      );
    }
}
export default renderHoveredItems;
