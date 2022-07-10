import React from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from './SearchBox';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            search: '',
        }
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