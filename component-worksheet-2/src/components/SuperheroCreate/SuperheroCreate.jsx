import React, { Component } from 'react';

class SuperheroCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            primaryAbility: "",
            secondaryAbility: "",
            errors: {
                name: "",
                primaryAbility: "",
                secondaryAbility: ""
            }
         }
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch(event.target.name) {
            case 'name':
                errors.name = event.target.value.length < 3 ? "Name of SuperHero must be greater then 3 characters" : null;
                break;
            case 'primaryAbility':
                errors.primaryAbility = event.target.value.length < 3 ? "Name of Primary Ability must be greater then 3 characters" : null;
                break;
            case 'secondaryAbility':
                errors.secondaryAbility = event.target.value.length < 3 ? "Name of Secondary Ability must be greater then 3 characters" : null;
                break;
            default:
                break;
        }
        this.setState({ 
            [event.target.name]: event.target.value,
            errors: errors  
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.appendFunction(this.state)
    }



    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <h3 style={{color:"blue"}}> Create New Hero </h3>
                <div>
                    <label>Superhero Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                </div>
                    {this.state.errors.name ? <p style={{color:"red"}}>{this.state.errors.name}</p> : ""}
                <div>
                    <label>New Hero Primary Ability</label>
                    <input type="text" name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility} />
                </div>
                    {this.state.errors.primaryAbility ? <p style={{color:"red"}}>{this.state.errors.primaryAbility}</p> : ""}
                <div>
                    <label>New Hero Secondary Ability</label>
                    <input type="text" name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility} />
                </div>
                    {this.state.errors.secondaryAbility ? <p style={{color:"red"}}>{this.state.errors.secondaryAbility}</p> : ""}
                <div>
                    <button type="submit"> Add Hero! </button>
                </div>
            </form>
         );
    }
}
 
export default SuperheroCreate;