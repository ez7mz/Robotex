import React from "react";
import './App.css'
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';

class App extends React.Component {

    constructor () {
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({robots:users}));
        console.log("check");
    }

    render () {
        const FilterRobots = this.state.robots.filter(user => {
            return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (!this.state.robots.length){
            return (<h1 className="f1 tc ma5">Loading...</h1>);
        }else {
            if (!FilterRobots.length){
                return (
                    <div className="tc">
                        <h1 className="f1">ROBOTEX</h1>
                        <SearchBox SearchChange={this.onSearchChange}/>
                        <h1>No friends found</h1>
                    </div>
                );
            }else {
                return (
                    <div className="tc">
                        <h1 className="f1">ROBOTEX</h1>
                        <SearchBox SearchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={FilterRobots}/>
                        </Scroll>
                    </div>
                );
            }
        }
    }
}

export default App;