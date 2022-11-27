import React from "react";

export class TodoList extends React.Component{
 state = {
     items: [
         'eat',
         'pray',
         'love',
     ],
     input:'',
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
      items:[...this.state.items, this.state.input],
      input:''
      
    })

}
ResetItems= (event) =>{
    event.preventDefault()
    this.setState({
      items: []
    }

    )
}
ClearItem= (index) =>{
 const items = this.state.items
 items.splice(index, 1)
 this.setState({
     items
 })
}


    render(){
        return(
            <div>
           <ul>
               {this.state.items.map((item,index)=>( 
            <div>
               <li key={item + index}>{item}</li>
               <button onClick={()=>this.ClearItem(index)}>Elimina item</button>
            </div>
               ))}
           </ul> 
           <input value={this.state.input} onChange={this.inputAddValue} />
           <button onClick={this.state.input !=='' ? this.addItems : undefined}>Aggiungi</button>
           <button onClick={this.ResetItems}>Reset</button>
           </div>
        )
    }
}