import React, {Component} from 'react';
import DeckGL, {IconLayer, WebMercatorViewport} from 'deck.gl';
import {json as requestJson} from 'd3-request';

import ICON from './data/media.png';
const DATA_URL = '/apis/meetup?lon=-73.935242&lat=40.73061';  // eslint-disable-line

const ICON_MAPPING = {
  marker: {x: 0, y: 0, width: 520, height: 520, mask: false}
};

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
export default class IconDeckGLOverlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      hoveredItems: null,
      expanded: false,
 			data: null,
	  	hoveredObject: null,
    };
		requestJson(DATA_URL, (error, response) => {
      if (!error) {
        this.setState({data: response});
      }
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
		const items=[hoveredObject];
		const wrapWord = {wordWrap: 'break-word'}
		return (
				<div style={{...tooltipStyle, left: x, top: y}}>
        <div>Meetup information</div>
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
    if (!data ) {
      return null;
    }
    const layer = new IconLayer({
      id: 'icon',
      data,
      pickable: true,
      iconAtlas: ICON,
      iconMapping: ICON_MAPPING,
      sizeScale: ICON_SIZE * window.devicePixelRatio,
      getPosition: d => d.coordinates,
      getIcon: d => 'marker',
      getSize: d => 20,
 	  	onHover: this._onHover.bind(this),
      onClick: this.props.onClick,
    });

    return (
			<div>
		  	{this.renderHoveredItems()}
				<DeckGL {...viewport} layers={ [layer] } />;
			</div>
		);
  }
}
