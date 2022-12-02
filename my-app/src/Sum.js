import React from "react";

export function Sum({numbers=[1,2,3,4,5,7]}){
 let sum = numbers.reduce((prev,next)=>{
     return prev + next
 })
 
 
 return (<div>
     <h1>
        {sum} 
     </h1>
 </div>)
}

