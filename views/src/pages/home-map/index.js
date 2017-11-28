import React, {Component} from 'react';
import MapGL from 'react-map-gl';
import GeoJsonDeckGLOverlay from '../layers/geo-json/index.js';
import DeckGLOverlay from '../layers/custom-trips-layer/trips-deckgl-overlay.js';
import IconDeckGLOverlay from '../layers/icon/index.js';
import {Route} from 'react-router';

const MAPBOX_TOKEN = process.env.REACT_APP_MapboxAccessToken; // eslint-disable-line
//const DATA_URL = 'https://data.cityofnewyork.us/api/geospatial/thbt-gfu9?method=export&format=GeoJSON';  // eslint-disable-line
//const DATA_URL = 'https://api.cityofnewyork.us/calendar/v1/search.htm?app_id=ae66790f&app_key=38c8fef46fa43f5400db31de8e1e95f0&startDate=01%2F01%2F2017+01%3A00+am&endDate=12%2F31%2F2017+12%3A0+am'

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
      },
    };	
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
  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }
  render() {
    const {viewport} = this.state;
    return (
	    <div>
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._onViewportChange.bind(this)}
          mapboxApiAccessToken={MAPBOX_TOKEN}>
          <Route path={`${this.props.match.url}/subway`} render={ ()  => 
            	<GeoJsonDeckGLOverlay viewport={viewport}/> }/>
          <Route path={`${this.props.match.url}/taxi-trips-nyc`} render={ ()  => 
            <DeckGLOverlay viewport={viewport} /> }/>
					<Route path={`${this.props.match.url}/icons`} render={ ()  => 
            <IconDeckGLOverlay viewport={viewport} /> }/>
       </MapGL>
    </div>
    );
  }
}

export default Home;
