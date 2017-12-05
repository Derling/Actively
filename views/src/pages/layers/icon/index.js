import React, {Component} from 'react';
import DeckGL, {IconLayer} from 'deck.gl';
import {json as requestJson} from 'd3-request';
import MEETUP_ICON from './data/media.png';
import FOURSQUARE_ICON from './data/logo-foursquare.png'
import ROBBERIES_ICON from './data/crime-icon.png';
import renderHoveredItems from './renderHoveredItems.js';

const ICON_SIZE = 5;

const MEETUP_MAPPING = {
  marker: {x: 0, y: 0, width: 520, height: 520, mask: false}
};

const FOURSQUARE_MAPPING = {
  marker: {x: 0, y: 0, width: 1020, height: 1020, mask: false}
};

const ROBBERIES_MAPPING= {
  marker: {x: 30, y: 30, width: 520, height: 520, mask: false}
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
      dataRobberies: null,
	  	hoveredObject: null,
    };
		/* TODO Higher Level Component does not update 
		 * the props passed to get json data 
		 * aka navigator.geolocation.watchPosition call back finishes but json already rendered
		*/

		const {viewport}= this.props;
		let lon = viewport.longitude;
		let lat = viewport.latitude;
		let coordinates = 'lon='+lon+'&lat='+lat;
		const DATA_MEETUP = '/apis/meetup?'+coordinates;
		requestJson(DATA_MEETUP, (error, response) => {
    if (!error) {
    	this.setState({dataMeetup:response});
     }
   	});
		const DATA_FOURSQUARE = '/apis/foursquare/explore?'+coordinates
			+'&client_id='+process.env.REACT_APP_FourSquareClientId
			+'&client_secret='+process.env.REACT_APP_FourSquareClientSec; 
    let myInit = { method: 'GET'};
    var myRequest = new Request(DATA_FOURSQUARE, myInit);
    fetch(myRequest).then( (response) => {
        return response.json();
    }).then( (data)=> {
    	this.setState({dataFoursquare: data});
    });
    requestJson('/apis/nycCrime/robberies', (error,res) => {
    	if (!error) {
          let i=0;
          res.forEach( (obj) => {
              let temp=obj['Value'].split(',');
              obj.coordinates = [temp[1],temp[0]]
              obj.crime_robberies_id = i++;
          });
          console.log(res);
          this.setState({dataRobberies: res});
      }
    }); 
    /*
   	requestJson(DATA_FOURSQUARE, (error, response) => {
    	if (!error) {
     	}
   	});
    */
	}
	_onHover({x,y,object}) {
    this.setState({x, y, hoveredObject: object});
  }
  /* TODO add more functionally other than logging*/
  _onClick({x,y,object}) {
    console.log("Clicked icon:",object);
  }

  render() {
    const {viewport} = this.props;
		const {dataMeetup, dataFoursquare, dataRobberies} = this.state;
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
    const nycRobberies= new IconLayer({
      id: 'nycRobberies',
      data: dataRobberies,
      pickable: true,
      iconAtlas: ROBBERIES_ICON,
      iconMapping: ROBBERIES_MAPPING,
      sizeScale: ICON_SIZE * window.devicePixelRatio,
      getPosition: d => d.coordinates,
      getIcon: d => 'marker',
      getSize: d => 20,
 	  	onHover: this._onHover.bind(this),
      onClick: this._onClick.bind(this),
    });

    return (
			<div>
		  	{renderHoveredItems(this.state)}
				<DeckGL {...viewport} layers={ [meetup,foursquare,nycRobberies] } />;
			</div>
		);
  }
}
