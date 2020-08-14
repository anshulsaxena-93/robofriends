import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
    constructor(){
        super();
        //create the state for root app
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        //this triggers the render of the component
        this.setState({
            searchfield: event.target.value
        });
    }

    render() {
        //once the render is trigger filter the robots based on what is there in searchfield
        const filterdRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterdRobots} />
            </div>         
        );
    }
}

export default App