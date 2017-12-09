/* React Requirements */
import React, {Component} from 'react';
import {Route, Switch ,Redirect} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

/* Main Components */
import Home from '../home-map/index.js';
import NodeTest from '../users/index.js'

/* Sidebar */
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './material_title_panel';
import SidebarContent from './sidebar_content';
import { NavLink} from 'react-router-dom'

/* User */
import Signup from '../users/signup.js';
import Login from '../users/login.js';

/* User location */
import {Marker} from 'react-map-gl';
import Pin from './pin.js';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
};

/* Main Layout all components,
 * with navbar support must pass through here */
class MainLayout extends Component {
  constructor(props) {
    super(props);
		
    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragTogleDistance: 30,
			buttonCrimeChanged: false,
			USER_LOC : {
          position: [-74.006,40.7128],
          icon: 'marker', 
          size: 27, 
        },
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
		this._getUserCoord();
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
		this.handleCrimeChange = this.handleCrimeChange.bind(this);
		this._renderUserLoc = this._renderUserLoc.bind(this);
  }

	_getUserCoord() {
		/* Thanks Mozilla for having a easy Geolocation object */
		navigator.geolocation.watchPosition( (position) => {
		if(position.coords.longitude != this.state.USER_LOC.position[0]) {
			this.setState((prevState) => {
        prevState.USER_LOC.position[0] = position.coords.longitude;
				prevState.USER_LOC.position[1] = position.coords.latitude;
				prevState.viewport.longitude = position.coords.longitude;
				prevState.viewport.latitude = position.coords.latitude;
				return prevState;
			});
			this.forceUpdate( () => {console.log("Coord updated")});
			}
		});	
	}

	_renderUserLoc = (users_loc) => {
    return (
      <Marker 
        longitude={users_loc.position[0]}
        latitude={users_loc.position[1]} >
        <Pin size={users_loc.size} onClick={() => {console.log("clicked user loc")}} />
      </Marker>
    );
	}


  onSetOpen(open) {
    this.setState({open: open});
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

	handleCrimeChange(){
		console.log("Changed");
		this.setState({buttonCrimeChanged :!this.state.buttonCrimeChanged});
	}
      
  render() {
    const sidebar = <SidebarContent handleChange={this.handleCrimeChange} buttonChanged={this.state.buttonCrimeChanged} />;
    const contentHeader = (
        <span>
          {!this.state.docked &&
          <a onClick={this.menuButtonClick} style={styles.contentHeaderMenuLink}>
			    =
		      </a>}
          <span> Actively</span>
        </span>
    );
	  const contentLogin = (
        <NavLink to="/login" 
          activeClassName="active" 
          className="label lb-md">Login/Logout
        </NavLink>
		);
    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen,
    };
		const MyMap = (props) => {
			return (
				<Home
					crimeChange = {this.state.buttonCrimeChanged}
					renderUserLoc = {this._renderUserLoc}
					USER_LOC = {this.state.USER_LOC}
					viewport = {this.state.viewport}
					{...props}
				/>	
			);
		}
    return (
    <Sidebar {...sidebarProps}>
      <MaterialTitlePanel title={contentHeader} login={contentLogin}>
        <div style={styles.content}>
				  <main>
       	 		<Switch>
          			<Route path="/layer" component={MyMap} />
          			<Route path="/users" exact component={NodeTest} />
          			<Route path="/login" exact component={Login} />
          			<Route path="/signup" exact component={Signup} />
        		</Switch>
      		</main>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }

}

export default MainLayout;
