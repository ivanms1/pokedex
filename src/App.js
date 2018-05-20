import React, { Component } from 'react';
import Result from './components/result';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { search: '', pokemon: undefined, entry: undefined}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){
    this.setState({search: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();

    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${this.state.search.toLowerCase()}`)
    .then(response => response.json())
    .then((data) => {
      this.setState({ pokemon: data });
    });

    fetch(`http://pokeapi.salestock.net/api/v2/pokemon-species/${this.state.search.toLowerCase()}`)
    .then(response => response.json())
    .then((data) => {
      this.setState({ entry: data }, () => console.log(this.state.entry));
    });

    this.setState({ search: '' });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Simple Pokedex</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Enter name' value={this.state.search} onChange={this.handleChange} type="text"/>
          <input type="submit" value="Search"/>
        </form>
        <Result entry={this.state.entry} pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
