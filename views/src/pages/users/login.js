import React, { Component } from 'react';

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
			/* Defined /apis/login in express server */
     fetch('/apis/login',{                                                                                                                         
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
      .then( (res) => { return res.json(); })                                                                                                  
      .then( (data) => { alert( JSON.stringify( data ) ) }) 
      

  }

  render() {                                                                                                                                   
    return (                                                                                                                                   
      <form onSubmit={this.handleSubmit}>  
        <label>                                                                                                                                                 
          password:                                                                                                                                
          <input type="password" value={this.state.password} onChange={this.handlePassword} />                                                          
        </label> 
        <label>                                                                                                                                
          Email:                                                                                                                                
          <input type="text" value={this.state.email} onChange={this.handleEmail} />                                                          
        </label> 
        <input type="submit" value="Submit" />                                                                                                 
      </form>                                                                                                                                  
    )                                                                                                                                         
  }
}

export default Login;
