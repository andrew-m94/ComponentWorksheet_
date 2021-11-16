import React from 'react';

function SuperheroTable(props) {
    return ( 
        <div>
            <table>
                <thead>
                <tr>
                <th>Name</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
                </tr>
                </thead>
                <tbody>
                    {props.heroTable.map(superheroes => (
                        <tr key={superheroes.superheroId}>
                            <td >{superheroes.name}</td>
                            <td >{superheroes.primaryAbility}</td>
                            <td >{superheroes.secondaryAbility}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}

export default SuperheroTable;