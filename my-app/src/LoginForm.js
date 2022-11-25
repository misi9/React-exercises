import React from "react";

export class LoginForm extends React.Component{
  state = {
      username: '',
      password: '',
      remember: false
  }

  InputTextField = (event) => {
     const value = event.target.value
     const name = event.target.name
     const type = event.target.type
     const checked = event.target.checked

     this.setState ({
          [name] : type === 'checkbox' ? checked : value,
     }

     )
  }
  componentDidUpdate(){
      console.log(this.state)
  }



    render(){
        return(
         <div>
             <input name="username" value={this.state.username} onChange={this.InputTextField}/>
             <input name="password" type="password" value={this.state.password} onChange={this.InputTextField}/>
             <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.InputTextField}/>
         </div>
        )
    }
}