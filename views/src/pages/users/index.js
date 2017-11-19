import React, { Component } from 'react';

class NodeTest extends Component {

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  constructor() {
      super();
      this.state = { users : []};
  }

  render() {
    return (
		<div className="container">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div className="label label-default" key={user.id}> {user.username}</div>
        )}
		</div>
    );
  }
}

export default NodeTest;
