//import React from "react";
//import { CounterDisplay } from "./CounterDisplay";

//export class Counter extends React.Component{
//state = {
//    count: this.props.initialValue,
//}

//componentDidMount(){
//   setInterval(()=>{
//     this.setState((state)=>{
//       return{
//           count: state.count + this.props.incrementBy,
//       }
//    })
//   },this.props.timeOut)
// }

//Penso che il costruttore non serva siccome componentDidMount() è invocato dopo che il componente è montato (cioè inserito nell’albero del DOM)

// render(){
//     return(
//        <div>
//          <CounterDisplay count ={this.state.count}/>
//        </div>
//     )
// }
//}

//Counter.defaultProps ={
//    initialValue: 0,
//    incrementBy: 1,
//    timeOut : 1000,
//}

import { useEffect, useState } from "react";

export function Counter({initialValue = 0}) {
  const [count, setCount] = useState(initialValue)

  useEffect(() => {
    console.log(`Il counter è stato caricato`)
    
    return () => {
      console.log(`Il counter è stato eliminato`)
    }
  }, []);

  useEffect(() => {
    console.log(`attualmente il numero è ${count}` )
  }, [count])

  function handleUpdateCount() {
    setCount((c) => c + 1)
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleUpdateCount}>Increment</button>
    </div>
  );
}




