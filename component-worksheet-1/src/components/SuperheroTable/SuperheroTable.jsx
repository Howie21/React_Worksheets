import React from 'react';
import "./SuperheroTable.css"

function SuperheroTable(props) {
    return ( 
        <div >
        <table className="Ttable">
            <thead>
                <tr>
                    <th>Superhero ID</th>
                    <th>Title</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
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