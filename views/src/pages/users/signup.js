import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'

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
    event.preventDefault();                                                                                       
     fetch("/signup",{                                                                                                                         
          method: "POST",                                                                                                                      
          body: JSON.stringify({
            'firstName':this.state.firstName,
            'lastName':this.state.lastName,
            'username':this.state.username,
            'email'   :this.state.email,
            'password':this.state.password,
          }),                                                                                   
          headers: {                                                                                                                           
              'Content-Type': 'application/json',
              'Accept': 'application/json'                                                                                               
          },                                                                                                                                   
        })                                                                                                                                     
      .then( (res) => { return res.json(); })                                                                                                  
      .then( (data) => { alert( JSON.stringify( data ) ) })        
      .catch( (err)=>  { alert( err ) } )                                                                            
  }                                                                                                                                            
                                                                                                                                               
  render() {                                                                                                                                   
    const login = (
        <NavLink to="/login" > Here </NavLink>
		);

    return (                     
		<div className="container" style={{paddingTop: '3cm'}}>
      <div className="row centered-form text-center">
        <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
          <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Sign up to view<small> its free</small></h3>
          </div>
          <div className="panel-body">
          <form onSubmit={this.handleSubmit}>                                                                                                
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-mid-6 col-md-offset-3 ">
                <div className="form-group ">
                <label>Username: <input type="text"  className="form-control"value={this.state.username} onChange={this.handleUsername} /></label>   
                </div>
              </div>
            </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-mid-6 col-md-offset-3">
              <div className="form-group">
                <label> Password:<input type="text" className="form-control" value={this.state.password} onChange={this.handlePassword} /> </label> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-mid-6 col-md-offset-3">
              <div className="form-group">
              <label>  Email:<input type="text" className="form-control" value={this.state.email} onChange={this.handleEmail} /> </label> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-mid-6 col-md-offset-3">
              <div className="form-group">
                <label> Firstname: <input type="text" className="form-control" value={this.state.firstName} onChange={this.handleFirstName} /> 
                </label> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-mid-6 col-md-offset-3">
              <div className="form-group">
                <label> LastName:<input type="text" className="form-control" value={this.state.lastName} onChange={this.handleLastName} />
                </label> 
              </div>
            </div>
          </div>
          <input type="submit"className="form-control" value="Submit" className="btn btn-info btn-block"/> 
          </form>                                                                                                                                        <h3 className="panel-title">Have an account Sign in {login}</h3>
        </div>
      </div>
     </div>
    </div>
   </div>
    )                                                                                                                                         
  }                                                                                                                                                                                                                                                                                       
}  

export default Signup;
