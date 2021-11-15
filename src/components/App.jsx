import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';

class App extends Component{
    constructor(props){
        super(props); 
        this.state = {}

        this.name = {
            firstName: 'Reggie',
            lastName: 'White'
        }

        this.nameList = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }
    }

    render() {
        return (
            <DisplayName firstName={this.name.firstName} lastName={this.name.lastName}/>
        )
    }
    
}

export default App;