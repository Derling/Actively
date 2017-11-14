/* global window */
import React, {Component} from 'react';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import {setParameters} from 'luma.gl';
import "./deckgl-overlay.css"

export default class DeckGLOverlay extends Component {
	
  constructor(props) {
    super(props);
  }
  static get defaultViewport() {
    return {
      longitude: -74.0060,
      latitude: 40.7128,
      zoom: 12.6,
      minZoom: 5,
      maxZoom: 15,
      pitch: 50.5,
        /*
      bearing: -37.396674584323023
        */
    };
  }

  _initialize(gl) {
    setParameters(gl, {
      depthTest: true,
      depthFunc: gl.LEQUAL
    });
  }


  render() {
    const {viewport, data} = this.props;
	const colorScale = r => [r * 255, 140, 200 * (1 - r)];

    if (!data) {
      return null;
    }

	//console.log(this.props);
	//console.log(data);
    const layer = new GeoJsonLayer({
      id: 'geojson',
      data,
      stroked: true,
      filled: true,
      extruded: true,
	  getRadius: f => f.properties.radius ||  50, 
	  pickable: Boolean(this.props.onHover || this.props.onClick),
	  getFillColor: f => colorScale(25),
      getLineColor: f => [255, 255, 255],
 	  onHover: this.props.onHover,
      onClick: this.props.onClick,
    });
    return (
      <DeckGL {...viewport} layers={ [layer] } onWebGLInitialized={this._initialize} />
    );
  }
}
