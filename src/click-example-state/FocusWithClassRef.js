import { render } from "@testing-library/react";
import React from "react";
  
   export default class FocusWithClassRef extends React.Component {
    constructor(props) {
      super(props);
      this.inputElement = React.createRef();
    }
   
    render() {
      return (
        <input type="text" ref={this.inputElement} />
      );
    }

    componentDidMount(){
      this.inputElement.current.focus();
    }
  }
  
  // Now you can set focus when required.
  //this.inputElement.current.focus();

