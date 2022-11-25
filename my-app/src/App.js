import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome";
import {Welcome} from "./Welcome"




export class App extends React.Component{
  render(){
    return (
      <div>
      <Hello/>
      <Welcome name = {<strong>Rita</strong>} age = {14}/>
      <Counter initialValue={9} incrementBy={3} timeOut={500}/>
      <ClickCounter/>
      <br />
      <ClickTracker/>
      <br />
      <InteractiveWelcome/>
      </div>
    )
    
  }
}