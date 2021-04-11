import './App.css';
import React, {Component} from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(users=>this.setState({monsters:users}));
    this.setState({num:2});
  }
  handleChange = (e)=>{
    this.setState({searchField:e.target.value});
  }
  render(){
    const { monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex  </h1>
        <SearchBox 
          placeholder='search here'
          handleChange = {this.handleChange}        
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
