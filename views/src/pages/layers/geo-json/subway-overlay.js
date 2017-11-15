import React, {Component} from 'react';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import {setParameters} from 'luma.gl';
const request = require('d3-request');

const DATA_URL = 'https://data.cityofnewyork.us/api/geospatial/thbt-gfu9?method=export&format=GeoJSON';  // eslint-disable-line

export default class SubwayDeckGLOverlay extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: null,
    }
    request.json(DATA_URL, (err, json) => {
		  if(!err){
			  this.setState({data: json});
		  }
		  else 
			  console.log(err);
	    });
  }

     
  _initialize(gl) {
    setParameters(gl, {
      depthTest: true,
      depthFunc: gl.LEQUAL
    });
  }

  render() {
    const {viewport} = this.props;
   const data = this.state.data;
	const colorScale = r => [r * 255, 140, 200 * (1 - r)];

    if (!data) {
      return null;
    }

    const layer = new GeoJsonLayer({
      id: 'geojson',
      data,
      stroked: true,
      filled: true,
      extruded: true,
	  getRadius: f => f.properties.radius ||  50, 
	  pickable: Boolean(this.props.onHover || this.props.onClick),
	  getFillColor: f => colorScale(25),
      getLineColor: f => [255, 140, 200],
 	  onHover: this.props.onHover,
      onClick: this.props.onClick,
      lineWidthScale: 30
    });
    return (
      <DeckGL {...viewport} layers={ [layer] } onWebGLInitialized={this._initialize} />
    );
  }
}
