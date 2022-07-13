import React from "react";
import './App.css'
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';

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

        let {robots,search} = this.state;

        const robotArray = robots.filter(robot => {
            return robot.name.toLowerCase().includes(search.toLowerCase())
        });

        if (robotArray.length === 0) {
            return (
                <h2>Loading ...</h2>
            );
        } else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox onSearch={this.onSearchChanged}/>
                    <Scroll>
                        <CardList robots={robotArray}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;