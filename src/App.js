import React from "react";
import './App.css'
import CardList from "./CardList";
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            search: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
            .then(users => {
        this.setState({robots: users})
            });
    }

    onSearchChanged = (event) => {
        this.setState({search: event.target.value});
    }

    render() {
        const robotArray = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox onSearch={this.onSearchChanged}/>
                <CardList robots={robotArray}/>
            </div>
        )
    }
}

export default App;