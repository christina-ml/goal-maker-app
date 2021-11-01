import { Component } from "react";

class Stats extends Component{
    constructor(){
      super();
    }
    render(){
      return (
        <div className="stats">
            <div>Total Completed Lists: 5</div>
            <div>Current Items Complete: 0%</div>
        </div>
      );
    }
}

export default Stats;