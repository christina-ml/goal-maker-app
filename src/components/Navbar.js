import { Component } from "react";

class Navbar extends Component{
    constructor(){
      super();
    }
    render(){
      return (
        <div className="navbar">
            <h1>Goal Maker App</h1>
            <div className="buttons">
                <button>Settings</button>
                <button>Log out</button>
            </div>
        </div>
      );
    }
}

export default Navbar;