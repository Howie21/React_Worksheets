import React, { Component } from 'react';
import DisplayName from './components/DisplayName/DisplayName';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render(){
        return (
            <div className="container-fluid">
                <DisplayName />
            </div>
        )
    }
}
 
export default App;

