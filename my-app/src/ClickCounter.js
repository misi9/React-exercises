//import React from "react"


//export class ClickCounter extends React.Component{
 //state = {
  //   count: 0,
 //}
 
 //handleCounterIncrement = () => {
  //  this.setState((state) =>{
   //   return {
   //     count : state.count + 1,
   //   }
  //  })
// }
 

 

 //render(){
 //    return(
 //        <div>
 //          <h2>Count: {this.state.count}</h2>
 //          <button onClick={this.handleCounterIncrement}>Incremento</button>
  //       </div>
  //   )
 //}
//}

import {useState} from "react";

export function ClickCounter({initialValue=0}) {
  const [counter, setCounter]= useState(initialValue)

  function incrementCounter(){
    setCounter((initial)=> initial + 1)
  }


  return(
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={incrementCounter}>Aggiungi</button>
    </div>
  )
}
