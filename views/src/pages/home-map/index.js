
import React, {Component} from 'react';
import MapGL, {GL} from 'react-map-gl';
import SubwayDeckGLOverlay from '../layers/geo-json/subway-overlay.js';
import DeckGLOverlay from '../layers/custom-trips-layer/trips-deckgl-overlay.js';
import {Route} from 'react-router';

const MAPBOX_TOKEN = process.env.REACT_APP_MapboxAccessToken; // eslint-disable-line
//const DATA_URL = 'https://data.cityofnewyork.us/api/geospatial/thbt-gfu9?method=export&format=GeoJSON';  // eslint-disable-line
//const DATA_URL = 'https://api.cityofnewyork.us/calendar/v1/search.htm?app_id=ae66790f&app_key=38c8fef46fa43f5400db31de8e1e95f0&startDate=01%2F01%2F2017+01%3A00+am&endDate=12%2F31%2F2017+12%3A0+am'


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
        longitude: -74.0060,
        latitude: 40.7128,
        zoom: 12.6,
        minZoom: 5,
        maxZoom: 15,
        pitch: 50.5,
        width: 500,
        height: 500,
        time: 0,
      },
	  hoveredObject: null
    };	
	/*
	fetch('/test')
      .then(res => res.json())
      .then(json => {this.setState({data: json});});

	*/
  }
  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
    this._animate();
  }

  componentWillUnmount() {
    if (this._animationFrame) {
      window.cancelAnimationFrame(this._animationFrame);
    }
  }

  _animate() {
    const timestamp = Date.now();
    const loopLength = 1800;
    const loopTime = 60000;

    this.setState({
      time: ((timestamp % loopTime) / loopTime) * loopLength
    });
    this._animationFrame = window.requestAnimationFrame(this._animate.bind(this));
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
	console.log("Good job kid you clicked");
    this.setState({selected: info.object});
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  render() {
    const {viewport, selected, time} = this.state;
    return (
	    <div>
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._onViewportChange.bind(this)}
          mapboxApiAccessToken={MAPBOX_TOKEN}>
		      {this.renderHoveredItems()}
          <Route path={`${this.props.match.url}/subway`} render={ ()  => 
            <SubwayDeckGLOverlay
              onHover={this._onHover.bind(this)}
		          onClick={this._onClick.bind(this)}
              viewport={viewport}
            /> 
          }/>
          <Route path={`${this.props.match.url}/taxi-trips-nyc`} render={ ()  => 
            <DeckGLOverlay
              viewport={viewport}
              time={time}
            /> 
          }/>

       </MapGL>
    </div>
    );
  }
}
export default Home;
