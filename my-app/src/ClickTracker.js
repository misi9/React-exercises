import React from "react";

export class ClickTracker extends React.Component{
    state = {
        click: "",
    }

    ClickButton = (event) => {
        this.setState({
            click: event.target.innerHTML
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.ClickButton}>Button 1</button>
                <button onClick={this.ClickButton}>Button 2</button>
                <button onClick={this.ClickButton}>Button 3</button>
                <h3>Click {this.state.click} !</h3>
            </div>
        )
    }
}