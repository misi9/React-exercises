import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./Hello"
import {Welcome} from "./Welcome"



export class App extends React.Component{
  render(){
    return (
      <div>
      <Hello/>
      <Welcome name = {<strong>Rita</strong>} age = {14}/>
      <Counter/>
      </div>
    )
    
  }
}