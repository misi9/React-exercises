import React from "react";

export class UncontrolledLogin extends React.Component{
    SumbitUncontrolledComponents = (event) => {
       event.preventDefault()

       const username = event.target.elements.username.value
       const password = event.target.elements.password.value
       const remember = event.target.elements.remember.checked


       console.log({
         username,
         password,
         remember,
       })
    }





    render(){
        return(
            <div>
                <h1>Uncontrolled Login</h1>
             <form onSubmit={this.SumbitUncontrolledComponents}>
                 <input name="username" />
                 <input name="password" type="password" />
                 <input name="remember" type="checkbox" />
                 <button type="submit">Login</button>
                 <button type="reset">Reset</button>
             </form>
            </div>
        )
    }
}