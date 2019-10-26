import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CelebrityList from './components/CelebrityList'

class App extends Component {
  render() {

    return (
      <div className="App">
        <CelebrityList></CelebrityList>
      </div>
    );
  }
}

export default App;
