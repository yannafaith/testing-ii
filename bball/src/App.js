import React, { Component } from 'react';
import './App.css';
import Display from './Display';

class App extends Component {
  state = {
    fouls: 0,
    strikes: 0,
    hits: 0
  }

  render() {
    return (
      <div className="App">
      <> 
        <button>Hit</button>
        <button>Foul</button>
        <button>Strike</button>
      </>
      <>
        <Display hits={this.state.hits} fouls={this.state.fouls} strikes={this.state.strikes}/>
      </>
      </div>
    );
  }
}

export default App;
