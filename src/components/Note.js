import { Component } from "react";

class Note extends Component{
    constructor(){
      super();
    }
    render(){
      return (
        <div className="note">
            <h4>Title</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur dolores, facere aliquid sapiente placeat dolorum quibusdam modi mollitia temporibus quae consequatur ipsum dolore est assumenda culpa ad illum iusto nam.
            </p>
        </div>
      );
    }
}

export default Note;