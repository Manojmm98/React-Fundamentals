import React, { Component } from "react";
import { Consumer } from "./Context";

// here we rendereed the name property from app component without sending via props through context api
export class ComponentC extends Component {
    render() {
       
      return(
    <Consumer>
      {
      name => {
        return <h1>Hello {name}</h1>
      }
      }
    </Consumer>
      )
  }
}

export default ComponentC;
