import React, {Component} from 'react';
import DeckGL, {PolygonLayer} from 'deck.gl';
import {setParameters} from 'luma.gl';
import TripsLayer from './trips-layer';
import {json as requestJson} from 'd3-request';

const DATA_URL = {
  BUILDINGS: 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/trips/buildings.json',  // eslint-disable-line
  TRIPS: 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/trips/trips.json'  // eslint-disable-line
};

const LIGHT_SETTINGS = {
  lightsPosition: [-74.05, 40.7, 8000, -73.5, 41, 5000],
  ambientRatio: 0.05,
  diffuseRatio: 0.6,
  specularRatio: 0.8,
  lightsStrength: [2.0, 0.0, 0.0, 0.0],
  numberOfLights: 2
};

export default class DeckGLOverlay extends Component {

  constructor(props) {
      super(props);
      this.state = {
        buildings: null,
        trips: null,
        time: 0,
        trailLength:180
      };
      requestJson(DATA_URL.BUILDINGS, (error, response) => {
        if (!error) {
          this.setState({buildings: response});
        }
      });
      requestJson(DATA_URL.TRIPS, (error, response) => {
        if (!error) {
          this.setState({trips: response});
        }
      });
  }
  _initialize(gl) {
    setParameters(gl, {
      depthTest: true,
      depthFunc: gl.LEQUAL
    });
  }

  render() {
    const {viewport, time} = this.props;
    const {buildings, trips, trailLength } = this.state;


    if (!buildings || !trips) {
      return null;
    }

    const layers = [
      new TripsLayer({
        id: 'trips',
        data: trips,
        getPath: d => d.segments,
        getColor: d => d.vendor === 0 ? [253, 128, 93] : [23, 184, 190],
        opacity: 0.3,
        strokeWidth: 2,
        trailLength,
        currentTime: time
      }),
      new PolygonLayer({
        id: 'buildings',
        data: buildings,
        extruded: true,
        wireframe: false,
        fp64: true,
        opacity: 0.5,
        getPolygon: f => f.polygon,
        getElevation: f => f.height,
        getFillColor: f => [74, 80, 87],
        lightSettings: LIGHT_SETTINGS
      })
    ];

    return (
      <DeckGL {...viewport} layers={layers} onWebGLInitialized={this._initialize} />
    );
  }
}
