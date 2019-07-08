import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { monsters, searchField } = this.state;// pulling out search and monster value equivalent to const monsters = this.state.monsters and const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())//monster name will be lowercased and will only see if it includes
    )
    return(
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='Monster info here'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
    );
  }
}

export default App;
