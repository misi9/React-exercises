import React from "react";

export function Sum(props){
 let sum = props.numbers.reduce((prev,next)=>{
     return prev + next
 })
 
 
 return (<div>
     <h1>
        {sum} 
     </h1>
 </div>)
}