import React, { Component } from 'react';
/* Page only exits to make sure we can communicate with back-end */
class NodeTest extends Component {
  componentDidMount() {
    fetch('/test')
      .then(res => res.json())
      .then(users => this.setState({ users })).catch( err => {console.log("ERROR in NodeTest",err)});
  }
  constructor() {
      super();
      this.state = { users : []};
  }

  render() {
    return (
		<div className="container">
        <h1 className="jumbotron"> 
          Comunicating with back-end?: {this.state.users.length>0 ? "We're Live" : "Something is wrong"}
        </h1>
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div className="label label-default" key={user.id}> {user.username}</div>
        )}
		</div>
    );
  }
}

export default NodeTest;
