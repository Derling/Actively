import React, { Component } from 'react';

class Login extends Component {

  constructor() {
      super();
  }

  render() {
    return(
    <div class="container-fluid">
    	<div class="row">
    		<h1> Welcome Back To Actively </h1>
    	</div>
    	<div class="row">
    		<div class="login">
    			<form action="/login" method="post" name="login">
    				<div class="col-sm-12">
    					<label for="email"> Email Address </label>
	    				<input type="email" id="email"></input>
    				</div>
    				<div class="col-sm-12">
    					<label for="password">Password </label>
    					<input type="password" id="password"></input>
	    			</div>
            <div class="col-sm-12">
              <button type="submit"> Submit! </button>
            </div>
    			</form>
    		</div>
    	</div>
    </div>
    );
  }
}

export default Login;