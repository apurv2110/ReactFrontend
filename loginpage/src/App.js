import React, {Component} from "react";
import logo from './altimetrik.jpg';
import './App.css';
import Form from './Form'
function App() {
  return (
    <div className="App">
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Asset Shipment Details</h2>
        </div>
      <Form/>
    </div>
  );
}

export default App;
