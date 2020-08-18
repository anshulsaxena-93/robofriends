import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        //create the state for root app
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json();
        }).then((users) => {
            this.setState({
                robots: users
            });
        });
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
        if (this.state.robots.length === 0) {
            return (<h1>Loading..</h1>)
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterdRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App