import React, { Component } from 'react';
import './DisplayName.css'

class DisplayName extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: 'Wesley',
            lastName: 'Howard'
         }
    }
    render() { 
        return ( 
            <h1 className="nameFormat"> {this.state.firstName} {this.state.lastName} </h1>
         );
    }
}
 
export default DisplayName;