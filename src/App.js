import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';

class App extends Component {
  state = {
    username: '',
  }

  handleSearch = (e, username) => {
    e.preventDefault();
    this.setState({
      username,
    });
  }

  render = () => {
    const { username } = this.state;
    return (
      <div className="App">
        <Header handleSearch={this.handleSearch} />
        <Main username={username} />
      </div>
    );
  }
}

export default App;
