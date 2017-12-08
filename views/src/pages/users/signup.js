import React, { Component } from 'react';

class Signup extends Component {

 constructor(props) {                                                                                                                          
    super(props);      
    this.state = {username:'',email: '', password: '', firstName: '' , lastName: ''}                                                                                                            
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);                                                                                                                                       
    this.handleLastName = this.handleLastName.bind(this);          
    this.handleUsername = this.handleUsername.bind(this);                                                                                
    this.handleSubmit = this.handleSubmit.bind(this);                                                                                          
  }                                                                                                                                            
                                                                                                                                               
  handleUsername(event,value) {                                                                                                                        
   this.setState({username: event.target.value});                                                                                                 
  }   
  handlePassword(event,value) {                                                                                                                        
   this.setState({password: event.target.value});                                                                                                 
  }  
  handleEmail(event,value) {                                                                                                                        
   this.setState({email: event.target.value});                                                                                                 
  }  
  handleFirstName(event,value) {                                                                                                                        
   this.setState({firstName: event.target.value});                                                                                                 
  }  
  handleLastName(event,value) {                                                                                                                        
   this.setState({lastName: event.target.value});                                                                                                 
  }                                                                                                                                           
                                                                                                                                               
  handleSubmit(event) {                                                                                                                        
    alert('A name was submitted: ' + this.state.email );                                                                                        
     fetch("/apis/signup",{                                                                                                                         
          method: "POST",                                                                                                                      
          body: JSON.stringify({
            'firstName':this.state.firstName,
            'lastName':this.state.lastName,
            'username':this.state.username,
            'email'   :this.state.email,
            'password':this.state.password,
          }),                                                                                   
          headers: {                                                                                                                           
              'Content-Type': 'application/json'                                                                                               
          },                                                                                                                                   
        })                                                                                                                                     
      .then( (res) => { return res.json(); })                                                                                                  
      .then( (data) => { alert( JSON.stringify( data ) ) })        
      .catch(()=>{alert('error on signup.js')})                                                                            
  }                                                                                                                                            
                                                                                                                                               
  render() {                                                                                                                                   
    return (                                                                                                                                   		<div className="container">
			<div className="row centered-form">
				<div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
					<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Use Bootstrap for styling<small>google it if you have to</small></h3>
					</div>
					<div className="panel-body">
      		<form onSubmit={this.handleSubmit}>                                                                                                
						<div className="row">
							<div className="col-xs-6 col-sm-6 col-md-6">
								<div className="form-group">
        				<label>Username:                                                                                                                                <input type="text" value={this.state.username} onChange={this.handleUsername} />                                                        		</label>   
								</div>
							</div>
						</div>
					<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-6">
					<div className="form-group">
        	<label> Password:                                                                                                                                <input type="text" value={this.state.password} onChange={this.handlePassword} /> 
        	</label> 
					</div>
					</div>
					</div>
					<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-6">
					<div className="form-group">
        <label>                                                                                                                                
          Email:                                                                                                                                
          <input type="text" value={this.state.email} onChange={this.handleEmail} />                                                          
        </label> 
				</div>
					</div>
					</div>
				<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-6">
					<div className="form-group">
        <label>                                                                                                                                
          Firstname:                                                                                                                                
          <input type="text" value={this.state.firstName} onChange={this.handleFirstName} />                                                          
        </label> 
					</div>
					</div>
					</div>
			<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-6">
					<div className="form-group">


        <label>                                                                                                                                
          LastName:                                                                                                                                
          <input type="text" value={this.state.lastName} onChange={this.handleLastName} />                                                          
        </label> 
			</div>
					</div>
					</div>
			
        <input type="submit" value="Submit" className="btn btn-info btn-block"/> 
      </form>                                                                                                                                  
			</div>
			</div>
			</div>
			</div>
			</div>
    )                                                                                                                                         
  }                                                                                                                                                                                                                                                                                       
}  

export default Signup;
