import React, {Component} from 'react';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import {setParameters} from 'luma.gl';
const request = require('d3-request');

const DATA_URL = 'https://data.cityofnewyork.us/api/geospatial/thbt-gfu9?method=export&format=GeoJSON';   
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

export default class SubwayDeckGLOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: null,
	  		hoveredObject: null,
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
		return (
				<div style={{...tooltipStyle, left: x, top: y}}>
        <div>Subways Under-construction </div>
        <div></div>
        <div>{`Location: ${hoveredObject.properties.location}`}</div>
      	</div>
       ); 
    }
  _onClick(info) {
		console.log("Good job kid you clicked");
    this.setState({selected: info.object});
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
	  	pickable: Boolean(true),
	  	getFillColor: f => colorScale(25),
      getLineColor: f => [255, 140, 200],
 	  	onHover: this._onHover.bind(this),
      onClick: this._onClick.bind(this),
      lineWidthScale: 30
    });
    return (
			<div>
		  	{this.renderHoveredItems()}
      	<DeckGL {...viewport} layers={ [layer] } onWebGLInitialized={this._initialize} />
			</div>
    );
  }
}
