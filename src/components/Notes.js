import { Component } from "react";
import Note from "./Note";

class Notes extends Component{
    constructor(){
      super();
    }
    render(){
      return (
        <div className="notes">
            <h2>These are all the Notes</h2>
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
      );
    }
}

export default Notes;