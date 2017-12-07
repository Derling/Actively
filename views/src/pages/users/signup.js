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
     fetch('/apis/signup',{                                                                                                                         
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
      .then( (res) => { res.json(); })                                                                                                  
      .then( (data) => { alert( JSON.stringify( data ) ) })        
      .catch(()=>{
        alert('error on signup.js')
      })                                                                            
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
          <input type="text" value={this.state.firstName} onChange={this.handleFirstName} />                                                          
        </label> 
        <label>                                                                                                                                
          LastName:                                                                                                                                
          <input type="text" value={this.state.lastName} onChange={this.handleLastName} />                                                          
        </label> 

        <input type="submit" value="Submit" />                                                                                                 
      </form>                                                                                                                                  
    )                                                                                                                                         
  }                                                                                                                                                                                                                                                                                       
}  

export default Signup;