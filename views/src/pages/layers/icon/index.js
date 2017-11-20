import React, {Component} from 'react';
import DeckGL, {IconLayer, WebMercatorViewport} from 'deck.gl';
import rbush from 'rbush';
import {json as requestJson} from 'd3-request';
import ICON from './data/location-icon-atlas.png';
const DATA_URL = '/apis/meetup?lon=-73.935242&lat=40.73061';  // eslint-disable-line

const tooltipStyle = {
  position: 'absolute',
  padding: '10px',
  background: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  maxWidth: '300px',
  fontSize: '15px',
  zIndex: 9,
  pointerEvents: 'none',
	wordWrap: 'break-word',
};

const ICON_SIZE = 5;

function getIconName(size) {
  if (size === 0) {
    return '';
  }
  if (size < 10) {
    return `marker-${size}`;
  }
  if (size < 100) {
    return `marker-${Math.floor(size / 10)}0`;
  }
  return 'marker-100';
}

function getIconSize(size) {
  return Math.min(100, size) / 100 * 0.5 + 0.5;
}

export default class IconDeckGLOverlay extends Component {

  constructor(props) {
    super(props);

    // build spatial index
    this.state = {
      x: 0,
      y: 0,
      hoveredItems: null,
      expanded: false,
 			data: null,
      iconMapping: null,
	  	hoveredObject: null,
    };
		requestJson(DATA_URL, (error, response) => {
      if (!error) {
        this.setState({data: response});
      }
    });
		fetch('/test')
      .then(res => res.json())
      .then(json => 
			{this.setState({iconMapping: json});}).catch( error => {console.log(error)});
  }

	_onHover({x,y,object}) {
    this.setState({x, y, hoveredObject: object});
  }

  renderHoveredItems() {
    const {x, y, hoveredObject} = this.state;
    if (!hoveredObject) {
      return null;
    }
		const items=[hoveredObject];
		const wrapWord = {
			wordWrap: 'break-word'
		}
		return (
				<div style={{...tooltipStyle, left: x, top: y}}>
        <div>Subways information</div>
        <div></div>
				{items.map(item =>
          <div style={wrapWord} key={item.event_id}>
						<div>{item.event_name}</div>
						<div style={wrapWord}>{item.description}</div>
						<div>{item.url}</div>
					</div>
        )}
      	</div>
       ); 
    }

  render() {
    const {viewport} = this.props;
		const {data,  iconMapping, showCluster} = this.state;
    if (!data || !iconMapping) {
      return null;
    }

    const z = Math.floor(viewport.zoom);
    const size = showCluster ? 1 : Math.min(Math.pow(1.5, viewport.zoom - 10), 1);
    const updateTrigger = z * showCluster;

    const layer = new IconLayer({
      id: 'icon',
      data,
      pickable: true,
      iconAtlas: ICON,
      iconMapping,
      sizeScale: ICON_SIZE * size * window.devicePixelRatio,
      getPosition: d => d.coordinates,
      getIcon: d => showCluster ? (d.zoomLevels[z] && d.zoomLevels[z].icon) : 'marker',
      getSize: d => showCluster ? (d.zoomLevels[z] && d.zoomLevels[z].size) : 20,
 	  	onHover: this._onHover.bind(this),
      onClick: this.props.onClick,
      updateTriggers: {
        getIcon: updateTrigger,
        getSize: updateTrigger
      }
    });

    return (
			<div>
		  {this.renderHoveredItems()}
			<DeckGL {...viewport} layers={ [layer] } />;
			</div>
		);
  }
}
