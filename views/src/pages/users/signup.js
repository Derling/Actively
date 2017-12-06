import React, { Component } from 'react';

class SignUp extends Component {

 constructor(props) {                                                                                                                          
    super(props);                                                                                                                  
                                                                                                                                               
    this.handleChange = this.handleChange.bind(this);                                                                                          
    this.handleSubmit = this.handleSubmit.bind(this);                                                                                          
  }                                                                                                                                            
                                                                                                                                               
  handleUsername(event) {                                                                                                                        
   this.setState({username: event.target.username});                                                                                                 
  }   
  handlePassword(event) {                                                                                                                        
   this.setState({password: event.target.password});                                                                                                 
  }  
  handleEmail(event) {                                                                                                                        
   this.setState({email: event.target.email});                                                                                                 
  }  
  handleFirstName(event) {                                                                                                                        
   this.setState({value: event.target.firstName});                                                                                                 
  }  
  handleLastName(event) {                                                                                                                        
   this.setState({value: event.target.lastName});                                                                                                 
  }                                                                                                                                           
                                                                                                                                               
  handleSubmit(event) {                                                                                                                        
    alert('A name was submitted: ' + this.state.value);                                                                                        
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
          Username:                                                                                                                                
          <input type="text" value={this.state.username} onChange={this.handleUsername} />                                                          
        </label>    
        <label>                                                                                                                                
          password:                                                                                                                                
          <input type="text" value={this.state.password} onChange={this.handlePassword} />                                                          
        </label> 
        <label>                                                                                                                                
          Email:                                                                                                                                
          <input type="text" value={this.state.email} onChange={this.handleEmail} />                                                          
        </label> 
        <label>                                                                                                                                
          Firstname:                                                                                                                                
          <input type="text" value={this.state.value} onChange={this.handleFirstName} />                                                          
        </label> 
        <label>                                                                                                                                
          LastName:                                                                                                                                
          <input type="text" value={this.state.value} onChange={this.handleLastName} />                                                          
        </label> 

        <input type="submit" value="Submit" />                                                                                                 
      </form>                                                                                                                                  
    )                                                                                                                                         
  }                                                                                                                                                                                                                                                                                       
}  

export default SignUp;