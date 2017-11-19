import React, {Component} from 'react';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import {setParameters} from 'luma.gl';
import OptionsPanel from '../side-bar-options-panel.js';
import { Redirect } from 'react-router';
const request = require('d3-request');

const DATA_URL = 'https://data.cityofnewyork.us/api/geospatial/drex-xx56?method=export&format=GeoJSON'
const tooltipStyle = {
  position: 'absolute',
  padding: '10px',
  background: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  maxWidth: '300px',
  fontSize: '15px',
  zIndex: 9,
  pointerEvents: 'none',

};

export default class GeoJsonLayerDeckGLOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: null,
	  		hoveredObject: null,
        selected: null,
				x:0,
				y:0,
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

	_onHover({x,y,object}) {
    this.setState({x, y, hoveredObject: object});
  }

  renderHoveredItems() {
    const {x, y, hoveredObject} = this.state;
    if (!hoveredObject) {
      return null;
    }
		const items = [hoveredObject.properties];
		return (
				<div style={{...tooltipStyle, left: x, top: y}}>
        <div>Subways information</div>
        <div></div>
				{items.map(item =>
          <div className="label label-default" key={item.objectid}>{item.name} {item.line}</div>
        )}
      	</div>
       ); 
    }

  _onClick(info) {
    this.setState({selected: info.object});
    return <Redirect push to="/sample" />;
  }

  render() {
    const {viewport} = this.props;
   	const data = this.state.data;
		const colorScale = r => [r * 255, 140, 200 * (1 - r)];

    if (!data) {
      return null;
    }

    const subwaylayer = new GeoJsonLayer({
      id: 'geojson',
      data,
      stroked: true,
      filled: true,
      extruded: true,
	  	getRadius: f => f.properties.radius ||  10, 
	  	pickable: Boolean(true),
	  	getFillColor: f => colorScale(25),
      getLineColor: f => [255, 140, 200],
 	  	onHover: this._onHover.bind(this),
      onClick: this._onClick.bind(this),
      lineWidthScale: 30
    });
    return (
			<div>
        <div>
		  	  {this.renderHoveredItems()}
      	  <DeckGL {...viewport} layers={ [subwaylayer] } onWebGLInitialized={this._initialize} />
        </div>
        <div>
          <OptionsPanel />
        </div>
			</div>

    );
  }
}
