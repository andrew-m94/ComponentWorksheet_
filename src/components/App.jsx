import React, { Component } from 'react';
import AlertUser from './AlertUser/AlertUser';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import SuperheroTable from './SuperheroTable/SuperheroTable';

class App extends Component{
    constructor(props){
        super(props); 

        this.name = {
            firstName: 'Reggie',
            lastName: 'White'
        }

        this.nameList = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }

        this.superheroArray = {
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

    alertUser(){
        alert("devCodeCamp");
    }

    render() {
        return (
            <div>
                <DisplayName firstName={this.name.firstName} lastName={this.name.lastName}/>
                <NamesList nameList={this.nameList.names} />
                <AlertUser alertUser={this.alertUser} />
                <SuperheroTable heroTable={this.superheroArray.superheroes} />
            </div>
        )
    }
    
}

export default App;