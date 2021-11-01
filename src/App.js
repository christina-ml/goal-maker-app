import { Component } from 'react';
import './App.css';
import Lists from './components/Lists';
import Navbar from './components/Navbar';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="app">
        <Navbar />
        <Lists />
      </div>
    );
  }
}

export default App;
