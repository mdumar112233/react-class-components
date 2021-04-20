import React, { Component } from 'react';
import Users from './Users';

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            users:[],
            cart: []
        };
    }
    
    handleAddToCard(user){
        const newCart = [...this.state.cart];
        this.setState({cart: newCart});
        console.log(user);
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
                <h3>Users added in the Cart{this.state.cart.length}</h3>
                {
                    this.state.users.map(user => <Users user={user}handleAddToCard={this.handleAddToCard}></Users>)
                }
            </div>
        );
    }
}

export default Home;