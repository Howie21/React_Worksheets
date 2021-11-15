import React, { Component } from 'react';
import DisplayName from './components/DisplayName/DisplayName';
import NamesList from './components/NamesList/NamesList';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
         }
    }


    render(){
        return (
            <div className="container-fluid">
                <DisplayName />
                <NamesList namesList = {this.state.names}/>
            </div>
        )
    }
}
 
export default App;

