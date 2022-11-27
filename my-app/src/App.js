import React from "react";
import { Container } from "./Container";
import { LoginForm } from "./LoginForm";






export class App extends React.Component{
  render(){
    return (
    <Container>
      <LoginForm/>
    </Container>
    )
    
  }
}