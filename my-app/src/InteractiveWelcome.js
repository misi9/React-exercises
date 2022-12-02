import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state = {
        text : '',
    }

    InputWelcome = (event) => {
        const value = event.target.value

        this.setState({
            text : value,
        }

        )
    }


    render(){
        return(
        <div>
            <input name="text" value={this.state.text} onChange={this.InputWelcome} />
            <Welcome name={this.state.text}/>
        </div>
        )
    }
}