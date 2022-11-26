import React from "react";

export class TodoList extends React.Component{
 state = {
     items: [
         'eat',
         'pray',
         'love'
     ]
 }

 inputAddValue = (event) => {
    event.preventDefault()
    
    this.setState({
        input: event.target.value
    })
}


 addItems = (event) => {
    event.preventDefault()
 
    this.setState({
      items:[...this.state.items, this.state.input]
    })
}


    render(){
        return(
            <div>
           <ul>
               {this.state.items.map((item,index)=>( 
               <li key={item + index}>{item}</li>
               ))}
           </ul> 
           <input onChange={this.inputAddValue}/>
           <button onClick={this.addItems}>Aggiungi</button>
           </div>
        )
    }
}