import React, { Component } from 'react';
import './App.css';
import SuperheroCreate from './components/SuperheroCreate/SuperheroCreate';
import JokesAPI from './components/JokesAPI/JokesAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      superheroes: [
        {
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondaryAbility: 'Rich'
        },
        {
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondaryAbility: 'Fly'
        },
        {
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondaryAbility: 'Shoots web'
        }
    ]
     }
  }

  sendSuperheroDatabase = (newHero) => {
    this.state.superheroes.push(newHero);
    console.log(newHero);
    console.log(this.state.superheroes);
  }

  render() { 
    return ( 
      <div className="container-fluid">
          <SuperheroCreate appendFunction= {this.sendSuperheroDatabase} />
          <JokesAPI />
      </div>
    );
  }
}
 
export default App;
