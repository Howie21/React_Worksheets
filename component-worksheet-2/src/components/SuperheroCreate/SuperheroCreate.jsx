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
        this.this.setState({ 
            [event.target.name]: event.target.value,
            errors: errors  
        });
    }

    

    render() { 
        return ( 

         );
    }
}
 
export default SuperheroCreate;