import React, {Component} from 'react';
import DeckGL, {IconLayer} from 'deck.gl';
import {json as requestJson} from 'd3-request';
import MEETUP_ICON from './data/media.png';
import FOURSQUARE_ICON from './data/logo-foursquare.png'
const DATA_MEETUP = '/apis/meetup?lon=-73.935242&lat=40.73061';
const DATA_FOURSQUARE = '/apis/foursquare/explore?client_id='+process.env.REACT_APP_FourSquareClientId+'&client_secret='+process.env.REACT_APP_FourSquareClientSec+'&lon=-74.0018&lat=40.7243' ;  
const ICON_SIZE = 5;
const MEETUP_MAPPING = {
  marker: {x: 0, y: 0, width: 520, height: 520, mask: false}
};

const FOURSQUARE_MAPPING = {
  marker: {x: 0, y: 0, width: 1020, height: 1020, mask: false}
};


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

export default class IconDeckGLOverlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      hoveredItems: null,
      expanded: false,
 			dataMeetup: null,
      dataFoursquare: null,
	  	hoveredObject: null,
    };
		requestJson(DATA_MEETUP, (error, response) => {
      if (!error) {
        this.setState({dataMeetup:response});
      }
    });
    requestJson(DATA_FOURSQUARE, (error, response) => {
      if (!error) {
        this.setState({dataFoursquare: response});
      }
    });
  }

	_onHover({x,y,object}) {
    this.setState({x, y, hoveredObject: object});
  }
/*
																																					*/
  renderHoveredItems() {
    const {x, y, hoveredObject} = this.state;
    if (!hoveredObject ) {
      return null;
    }
		/* TODO Very lazy plz modularize into functions */
		const items=[hoveredObject];
		const wrapWord = {wordWrap: 'break-word'};
		if(!hoveredObject.event_id) {
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
      /* TODO change item.description to dangerous HTML and smaller render */ 
      return ( 
          <div style={{...tooltipStyle, left: x, top: y}}> 
            <div>Meetup information</div> 
						<div></div> 
						{items.map(item => <div style={wrapWord} key={item.event_id}>
						<div>{item.event_name}</div>
						<div style={wrapWord}>{item.description}</div>
						<div>{item.url}</div>
					</div>
        )}
      	</div>
       ); 
    }

  /* TODO add more functionally other than logging*/
  _onClick({x,y,object}) {
    console.log("Clicked icon:",object);
  }

  render() {
    const {viewport} = this.props;
		const {dataMeetup, dataFoursquare} = this.state;
    if (!dataMeetup) {
      return null;
    }
    const meetup = new IconLayer({
      id: 'meetup',
      data: dataMeetup,
      pickable: true,
      iconAtlas: MEETUP_ICON,
      iconMapping: MEETUP_MAPPING,
      sizeScale: ICON_SIZE * window.devicePixelRatio,
      getPosition: d => d.coordinates,
      getIcon: d => 'marker',
      getSize: d => 20,
 	  	onHover: this._onHover.bind(this),
      onClick: this._onClick.bind(this),
    });
    const foursquare = new IconLayer({
      id: 'foursquare',
      data: dataFoursquare,
      pickable: true,
      iconAtlas: FOURSQUARE_ICON,
      iconMapping: FOURSQUARE_MAPPING,
      sizeScale: ICON_SIZE * window.devicePixelRatio,
      getPosition: d => d.coordinates,
      getIcon: d => 'marker',
      getSize: d => 20,
 	  	onHover: this._onHover.bind(this),
      onClick: this._onClick.bind(this),
    });
    return (
			<div>
		  	{this.renderHoveredItems()}
				<DeckGL {...viewport} layers={ [meetup,foursquare] } />;
			</div>
		);
  }
}
