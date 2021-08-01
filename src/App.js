import React, { Component } from 'react';
import './App.css';
import logo from'./logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            {/* add link for logo to refresh page once uyrl is added */}
            <div className="logo-div">
                <img className="logo" src={logo} alt="Atleap Logo"></img>
            </div>
            <div className="title-div">
                <h1 className="app-title">Atleap</h1>
            </div>
            <div className="subtitle-div">
                <h3 className="app-subtitle">Born to compete</h3>
            </div>
        
            
            {/* <button className="about-btn">About</button> */}
        </div>

        <body className="body-home">
            <h2 className="body-title-home">Connecting disabled atheltes </h2>
            {/* <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React */}
            {/* </a> */}
        </body>
      </div>
    );
  }
}

export default App;