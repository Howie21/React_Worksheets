import React from 'react';
import "./SuperheroTable.css"
import 'bootstrap/dist/css/bootstrap.css';

function SuperheroTable(props) {
    return ( 
        <div className="row">
        <table striped bordered hover variant= "dark">
            <thead>
                <tr>
                    <th className="col-3">Superhero ID</th>
                    <th className="col-3">Title</th>
                    <th className="col-3">Primary Ability</th>
                    <th className="col-3">Secondary Ability</th>
                </tr>
            </thead>
            <tbody>
                {props.superheroesData.map(hero => {
                    return (
                    <tr key={hero.superheroId}>
                        <td>{ hero.superheroId }</td>
                        <td>{ hero.name }</td>
                        <td>{ hero.primaryAbility }</td>
                        <td>{ hero.secondaryAbility }</td>
                    </tr>
                    );
                })
                }
            </tbody>
        </table>
        </div>
     );
}

export default SuperheroTable;