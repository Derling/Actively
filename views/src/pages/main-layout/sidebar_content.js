import React from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom'
import './main.css'

const styles = {	
  sidebar: {
    width: 256,
    height: '100%',
    overflow: 'hidden'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#7575752',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
	textAlign: 'left',
    color: 'white',
    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
  }, 
  logoImage: {
  	backgroundColor: '#57585c',
  },
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
  
  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
    	<NavLink to="/" activeClassName="active" className="label lb-lg">Home</NavLink>
		<br></br>
    	<NavLink to="/users" activeClassName="active" className="label lb-lg">NodeTest</NavLink>
        <div style={styles.divider} />
			<div className="row">
    			<NavLink to="/layer/subway" activeClassName="active" className="label lb-lg">Subway info</NavLink>
			</div>
			<div className="row">
    			<NavLink to="/layer/taxi-trips-nyc" activeClassName="active" className="label lb-lg">Taxi Trips</NavLink>
			</div>
		</div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
