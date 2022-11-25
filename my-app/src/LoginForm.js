import React from "react";

export class LoginForm extends React.Component{
  state = {
      username: '',
      password: '',
      button: true
  }

  InputTextField = (event) => {
     const value = event.target.value
     const name = event.target.name
     const type = event.target.type
     const disabled =  event.target.disabled

     this.setState ({
          [name] : type === 'button' ? disabled : value,
     }

     )
  }



  componentDidUpdate(){
      console.log(this.state)
  }



    render(){
        return(
         <div>
             <div>
                 <button name="button" type="button" disabled={!Boolean(this.state.username && this.state.password)} onChange={this.InputTextField}>Click</button>
             </div>
             <input name="username" value={this.state.username} onChange={this.InputTextField}/>
             <input name="password" type="password" value={this.state.password} onChange={this.InputTextField}/>
         </div>
        )
    }
}