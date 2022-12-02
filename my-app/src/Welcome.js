import React from "react";
import { Age} from "./Age"

//export class Welcome extends React.Component{
//    render(){
       
 //       return(
 //           <div className="welcome">
 //           <p>Welcome, {this.props.name}!</p>
 //            <Age age = {this.props.age}/> 
 //           </div>
 //       )
//    }
//}

//Welcome.defaultProps = {
 //   name : "Jane"
//};


export function Welcome (props){
   return (
       <div>
           <p>Welcome {props.name}</p>
           <Age age={props.age}/>
       </div>
   )
}