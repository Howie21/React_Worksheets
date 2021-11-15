import React, { Component } from 'react';
import DisplayName from './components/DisplayName/DisplayName';
import NamesList from './components/NamesList/NamesList';
import AlertUser from './components/AlertUser/AlertUser';
import SuperheroTable from './components/SuperheroTable/SuperheroTable';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
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
                <SuperheroTable superheroesData={this.state.superheroes} />

            </div>
        )
    }
}
 
export default App;

