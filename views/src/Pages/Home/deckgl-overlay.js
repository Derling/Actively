/* global window */
import React, {Component} from 'react';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import {setParameters} from 'luma.gl';

const LIGHT_SETTINGS = {
  lightsPosition: [-125, 50.5, 5000, -122.8, 48.5, 8000],
  ambientRatio: 0.2,
  diffuseRatio: 0.5,
  specularRatio: 0.3,
  lightsStrength: [1.0, 0.0, 2.0, 0.0],
  numberOfLights: 2
};


export default class DeckGLOverlay extends Component {

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
    const {viewport, data } = this.props;

    if (!data) {
      return null;
    }

    const layer = new GeoJsonLayer({
      id: 'geojson',
      data,
      stroked: true,
      filled: true,
      extruded: true,
	  getFillColor: f => f.properties.fillColor || [25, 25, 25, 25],
	  getRadius: f => f.properties.radius ||  50, 
	  elevationScale: 30,
      lightSettings: LIGHT_SETTINGS,

    });

	console.log(data);
    return (
      <DeckGL {...viewport} layers={ [layer] } onWebGLInitialized={this._initialize} />
    );
  }
}
