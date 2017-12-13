import React, { Component } from 'react';
import gif from './giphy.gif';
import './style.css'
import { NavLink} from 'react-router-dom'


class FrontPage extends Component {
  constructor(){
    super()
  }
  render() {
       const signup = (
        <NavLink to="/login" > Login </NavLink>
    );   
    return (
           <div className='container' >
        <div className="content content--intro">
				<div className="content__inner">
					<h2 className="content__title" style={{paddingBottom:'50px'}}>Actively</h2>
					<h3 className="content__subtitle">NYC</h3>
			    </div>
        </div>
		  	<button className="btn btn-block">{signup}</button>
				<div className="img-info">
					<p className='img-info__title'>
					 Image taken by Samuel Witke 
					in Copenhagen,Denmark 
					</p>
				</div>
            </div>
    );
  }
}

export default FrontPage;
