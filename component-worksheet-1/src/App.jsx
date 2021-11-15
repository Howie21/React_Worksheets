import React, { Component } from 'react';
import DisplayName from './components/DisplayName/DisplayName';
import NamesList from './components/NamesList/NamesList';
import AlertUser from './components/AlertUser/AlertUser';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
         }
    }

    alertDevCodeCamp() {
        alert("devCodeCamp!!")
    }

    render(){
        return (
            <div className="container-fluid">
                <DisplayName />
                <NamesList namesList = {this.state.names}/>
                <AlertUser alertUserFunction={this.alertDevCodeCamp}/>
            </div>
        )
    }
}
 
export default App;

