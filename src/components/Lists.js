import { Component } from "react";
import List from "./List";

class Lists extends Component{
    constructor(){
      super();
    }
    render(){
      return (
        <div className="lists">
            <h2>These are all the lists</h2>
            <div className="list-container">
              <List />
              <List />
              <List />
              <List />
            </div>
        </div>
      );
    }
}

export default Lists;