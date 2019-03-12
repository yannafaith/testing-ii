import React, { Component } from 'react';
import './App.css';
import Display from './Display';

class Dashboard extends Component {
  state = {
    fouls: 0,
    strikes: 0,
    hits: 0,
    balls: 0
  };

  render() {
    return (
      <div className="App">
      <> 
        <h2>Dashboard</h2>
        <button title={`hit`}
          onClick={(e) => this.clicks(e)}>
          Hit 
        </button>
        <button title={`foul`}
          onClick={(e) => this.clicks(e)}>
          Foul
        </button>
        <button title={`strike`}
          onClick={(e) => this.clicks(e)}>
          Strike 
        </button>
        <button title={`ball`}
          onClick={(e) => this.clicks(e)}>
          Ball
        </button>
      </>
      <>
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
      </>
      </div>
    );
  }

  clicks = (e) => {
    if (e.target.title === 'hit') {
      this.setState({hits: this.state.hits+1});
      this.setState({balls: 0});
      this.setState({strikes: 0});
    } else if (e.target.title === 'foul') {
      if (this.state.strikes === 0) {
        this.setState({strikes: this.state.strikes+1})
      } else if (this.state.strikes === 1) {
        this.setState({strikes: this.state.strikes+1})
      }
    } else if (e.target.title === 'strike') {
      this.setState({strikes: this.state.strikes+1})
      if (this.state.strikes >= 2) {
        alert('strikeout!')
        this.setState({balls: 0});
        this.setState({strikes: 0});
      }
    } else if (e.target.title === 'ball') {
      this.setState({balls: this.state.balls+1})
      if (this.state.balls >= 3) {
        alert('4 balls!')
        this.setState({balls: 0});
        this.setState({strikes: 0});
      }
    }
  };
}

export default Dashboard;
