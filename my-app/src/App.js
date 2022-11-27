import React from "react";
import { Sum } from "./Sum";



export class App extends React.Component {
  

  render() {
    return (
      <Sum numbers={[1,2,3,4,5,7]}/>
    )
  }
}
