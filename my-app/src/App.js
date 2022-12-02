import {React} from 'react';
import { Routes,Route } from "react-router-dom"
import { Welcome } from './Welcome';
import { Container } from './Container';




export function App() {

    return (
      <Container title="Welcome girl!!">
      <Routes>
          <Route path='/' element={<Welcome name="Misida" age={28}/>}/>
        </Routes>
        </Container>
    )
  }

