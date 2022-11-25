import React from "react";

export class LoginForm extends React.Component{
  state = {
      username: '',
      password: '',
      remember: false,
      button: true
  }

  InputTextField = (event) => {
     const value = event.target.value
     const name = event.target.name
     const type = event.target.type
     const checked = event.target.checked
     const disabled =  event.target.disabled

     this.setState ({
        [name] : type === 'checkbox' ? checked : value,
       
     } )
     this.setState({
        [name] : type === 'button' ? disabled : value,
     }

     )
  }

  ResetValueButton= () =>{
      this.setState({
        username: '',
        password: '',
        remember: false,
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
                 <button onClick={this.ResetValueButton}>Reset</button>
             </div>
             <input name="username" value={this.state.username} onChange={this.InputTextField}/>
             <input name="password" type="password" value={this.state.password} onChange={this.InputTextField}/>
             <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.InputTextField}/>
         </div>
        )
    }
}