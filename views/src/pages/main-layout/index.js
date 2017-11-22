/* React Requirements */
import React, {Component} from 'react';
import {Route, Switch ,Redirect} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
/* Main Components */
import Home from '../home-map/index.js';
import NodeTest from '../users/index.js'
import Login from '../users/login.js';
/* Sidebar */
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './material_title_panel';
import SidebarContent from './sidebar_content';
import { NavLink} from 'react-router-dom'

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
      dragToggleDistance: 30,
    };

    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }
      
  render() {
    const sidebar = <SidebarContent />;
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
    return (
    <Sidebar {...sidebarProps}>
      <MaterialTitlePanel title={contentHeader} login={contentLogin}>
        <div style={styles.content}>
				  <main>
       	 		<Switch>
          			<Route path="/layer" component={Home} />
          			<Route path="/users" exact component={NodeTest} />
          			<Route path="/login" exact component={Login} />
								<Redirect to="/" />
        		</Switch>
      		</main>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default MainLayout;
