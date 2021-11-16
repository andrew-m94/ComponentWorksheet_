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
                    <tr>
                    {props.heroTable.map(superheroes => (
                        <td key={superheroes.superheroId}>{superheroes.name}</td>
                    ))}
                    </tr>
                    <tr>
                    {props.heroTable.map(superheroes => (
                        <td key={superheroes.superheroId}>{superheroes.primaryAbility}</td>
                    ))}
                    </tr>
                    <tr>
                    {props.heroTable.map(superheroes => (
                        <td key={superheroes.superheroId}>{superheroes.secondaryAbility}</td>
                    ))}
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default SuperheroTable;