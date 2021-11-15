function SuperheroTable(props) {
    return ( 
        <div>
            <table>
                <tr>
                <th>Name</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
                </tr>
                <tr>
                {props.heroTable.map(superheroes => (
                    <td key={superheroes.Id}>{superheroes.name}</td>
                ))}
                </tr>
                <tr>
                {props.heroTable.map(superheroes => (
                    <td key={superheroes.Id}>{superheroes.primaryAbility}</td>
                ))}
                </tr>
                <tr>
                {props.heroTable.map(superheroes => (
                    <td key={superheroes.Id}>{superheroes.secondaryAbility}</td>
                ))}
                </tr>
            </table>
        </div>
     );
}

export default SuperheroTable;