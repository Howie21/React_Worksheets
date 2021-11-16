import React, { Component } from 'react';
import axios from "axios";



class JokesAPI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jokeSetup: []
         }
    }

    componentDidMount(){
        this.getJoke();
    }


    async getJoke(){
        let joke = await axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5");
        console.log(joke);
        this.setState({
            jokeSetup: joke.data.jokes
        });
    }



    render() { 
        return ( 
            <div>
                <h3>JokesAPI Return: </h3>
                {console.log(this.state.jokeSetup)}
                
                {this.state.jokeSetup.map(joke => 
                    {if(joke.type === 'single'){
                        return (
                          <h5>Joke: {joke.joke}</h5>  
                        );
                    }else{
                        return (
                         <h5>
                            Setup: {joke.setup} <br/>
                            Delivery: {joke.delivery}
                        </h5>   
                        )    
                    }}   
                )}
            </div>
         );
    }
}
 
export default JokesAPI;