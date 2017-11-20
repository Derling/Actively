
/* global window,document */
import React, {Component} from 'react';
import MapGL, {GL} from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';
const request = require('d3-request');


// Set your mapbox token here
const MAPBOX_TOKEN = process.env.REACT_APP_MapboxAccessToken; // eslint-disable-line

// Source data 
const DATA_URL = 'https://data.cityofnewyork.us/api/geospatial/thbt-gfu9?method=export&format=GeoJSON';  // eslint-disable-line
//const DATA_URL = 'https://api.cityofnewyork.us/calendar/v1/search.htm?app_id=ae66790f&app_key=38c8fef46fa43f5400db31de8e1e95f0&startDate=01%2F01%2F2017+01%3A00+am&endDate=12%2F31%2F2017+12%3A0+am'

//const DATA_URL="";

const tooltipStyle = {
  position: 'absolute',
  padding: '4px',
  background: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  maxWidth: '300px',
  fontSize: '10px',
  zIndex: 9,
  pointerEvents: 'none'
};


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        ...DeckGLOverlay.defaultViewport,
        width: 500,
        height: 500
      },
      data: null,
	  hoveredObject: null
    };	
   request.json(DATA_URL, (err, json) => {
		if(!err){
			this.setState({data: json});
		}
		else 
			console.log(err);
	});
	/*
	fetch('/test')
      .then(res => res.json())
      .then(json => {this.setState({data: json});});

	*/
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  _onHover({x,y,object}) {
    this.setState({x, y, hoveredObject: object});
  }

  renderHoveredItems() {
    const {x, y, hoveredObject} = this.state;
    if (!hoveredObject) {
      return null;
    }
	return (
	<div style={{...tooltipStyle, left: x, top: y}}>
        <div>My God My God</div>
        <div></div>
        <div>{`Location: ${hoveredObject.properties.location}`}</div>
      </div>
         ); 
    }

  _onClick(info) {
    // Clicked a county
	console.log("Good job kid you clicked");
    this.setState({selected: info.object});
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  render() {
	const {viewport, data, selected} = this.state;
    return (
	<div>
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._onViewportChange.bind(this)}
        mapboxApiAccessToken={MAPBOX_TOKEN}>
		{this.renderHoveredItems()}
        <DeckGLOverlay
		  onHover={this._onHover.bind(this)}
		  onClick={this._onClick.bind(this)}
          viewport={viewport}
          data={data || []}
        />
      </MapGL>
	</div>
    );
  }
}

export default Home;
