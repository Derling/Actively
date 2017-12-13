import React, { Component } from 'react';
import Background from '../layers/icon/data/login.png';
import { NavLink} from 'react-router-dom'
class Login extends Component {

  constructor(props) {
    super(props);  

    this.state = {email:'',password:''}; 

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);   

    this.handleSubmit = this.handleSubmit.bind(this);                                                                                          
  }                                                                                                                                    
                                                                                                                                               
  handleEmail(event) {                                                                                                                        
   this.setState({email: event.target.value})                                                                                                 
  }   

  handlePassword(event) {                                                                                                                        
   this.setState({password: event.target.value})                                                                                                
  }

  handleSubmit(event) {   

    alert('A name was submitted: ' + this.state.email+ this.state.password);                                           
    event.preventDefault();
    fetch('/login',{                                                                                                                         
          method: "POST",                                                                                                                      
          body: JSON.stringify({
            'email'   : this.state.email,
            'password': this.state.password,
          }),                                                                                   
          headers: {  
               'Accept': 'application/json',                                                                                                                         
              'Content-Type': 'application/json'                                                                                               
          },                                                                                                                                   
    })    
    .then( (res) => {return res.json()})                                                                                                                             
    .then( (data) => { alert( JSON.stringify( data ) ) })
    .catch( (err) => { alert( "Incorrect email or password")})

  }

  render() { 
  const sectionStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: "url(" + Background + ")"
  }  
  const signup = (
        <NavLink to="/signup" > Create Here! </NavLink>
  )                                                                                                                               
    return (
<div>
  <div className="container" style={sectionStyle}>
    <div style={{paddingTop: '6cm'}}>   
      <div className="row centered-form text-center">
        <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
          <div className="panel panel-default"> 
            <div className="panel-heading">
              <h3 className="panel-title">Actively Login</h3>
            </div>
            <div className="panel-body">                                                                                                                               
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-mid-6 col-md-offset-3 ">
                    <div className="form-group ">  
                      <label>                                                                                                                                
                        Email:                                                                                                                                
                        <input type="text" value={this.state.email} onChange={this.handleEmail} />                                                          
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-mid-6 col-md-offset-3">
                    <div className="form-group"> 
                      <label>                                                                                                                                                 
                        Password:                                                                                                                                
                        <input type="password" value={this.state.password} onChange={this.handlePassword} />                                                          
                      </label>
                    </div>
                  </div>
                </div> 
                <input type="submit" value="Submit" className="btn btn-info btn-block" />                                                                                                 
              </form>
              <h3 className="panel-title">No Account? {signup}</h3> 
            </div>                                                                                                                                 
          </div>
        </div>
      </div>
    </div>
  </div> 
</div>   
    )                                                                                                                                         
  }
}

export default Login;
