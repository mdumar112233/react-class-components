import React, { Component } from 'react';
import Users from './Users';

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            users:[]
        };
    }
    

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({users:data}))
      }
    render() {
        return (
            <div>
                <h2>{this.state.users.length}</h2>
                {
                    this.state.users.map(user => <Users user={user}></Users>)
                }
            </div>
        );
    }
}

export default Home;