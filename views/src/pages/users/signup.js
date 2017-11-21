import React, { Component } from 'react';

class SignUp extends Component {

  constructor() {
      super();
  }

  render() {
    return(
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <h1> Join Actively! </h1>
        </div>
        <div class="row">
          <div class="col-sm-12 sign-up">
            <form action="/signup" method="post" name="signup">
              <div class="col-sm-12">
                <label for="fname"> First Name </label>
                <input type="name" id="fname"></input>
              </div>
              <div class="col-sm-12">
                <label for="lname"> Last Name </label>
                <input type="name" id="lname"></input>
              </div>
              <div class="col-sm-12">
                <label for="uname"> User Name </label>
                <input type="name" id="uname"></input>
              </div>
              <div class="col-sm-12">
                <label for="email"> Email Address </label>
                <input type="email" id="email"></input>
              </div>
              <div class="col-sm-12">
                <label for="password"> Password </label>
                <input type="password" id="password"></input>
              </div>
              <div class="col-sm-12">
                <label for="confirm"> Confirm Password </label>
                <input type="password" id="confirm"></input>
              </div>
              <div class="col-sm-12">
                <button type="submit"> Send! </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SignUp;

// make each input field into their own row for formatting
// fields = (firstname, lastname, username, email, password)