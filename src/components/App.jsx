import React, { Component } from 'react';
import AlertUser from './AlertUser/AlertUser';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';

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
            </div>
        )
    }
    
}

export default App;