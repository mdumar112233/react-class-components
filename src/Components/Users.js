import React, { Component } from 'react';

class Users extends Component {
    render() {
        return (
            <div>
                <h4>This is {this.props.user.name}</h4>
            </div>
        );
    }
}

export default Users;