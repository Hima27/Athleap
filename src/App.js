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
            <iframe className="Calender"  title="Calender" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23D50000&amp;ctz=America%2FToronto&amp;src=aGltYXBhdGVsMjdAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Mm84MnRhbGxkazdyYmJsODlqNmNtZWtsdDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%23EF6C00" style={{border: 'solid 1px #777'}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
XMA Header Image
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