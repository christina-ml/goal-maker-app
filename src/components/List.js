import { Component } from "react";

class List extends Component{
    constructor(){
      super();
    }
    render(){
      return (
        <div className="list">
            <h4>List Name</h4>
            <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>
        </div>
      );
    }
}

export default List;