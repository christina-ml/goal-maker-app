import { Component } from 'react';
import './App.css';
import Lists from './components/Lists';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Stats from './components/Stats';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="app">
        <Navbar />
        <Stats />
        <Notes />
        <Lists />
      </div>
    );
  }
}

export default App;
