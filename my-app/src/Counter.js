import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
 state = {
     count: this.props.initialValue,
 }
 
 componentDidMount(){
     setInterval(()=>{
       this.setState((state)=>{
         return{
             count: state.count + this.props.incrementBy,
         }
       })
     },this.props.timeOut)
 }

 //Penso che il costruttore non serva siccome componentDidMount() è invocato dopo che il componente è montato (cioè inserito nell’albero del DOM)

 render(){
     return(
         <div>
           <CounterDisplay count ={this.state.count}/>
         </div>
     )
 }
}


Counter.defaultProps ={
    initialValue: 0,
    incrementBy: 1,
    timeOut : 1000,    
}