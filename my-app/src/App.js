import {React} from 'react';
import { Routes,Route } from "react-router-dom"
import { Welcome } from './Welcome';
import { Container } from './Container';
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';




export function App() {

    return (
      <Container title="Welcome girl!!">
      <Routes>
          <Route path='/' element={<Welcome name="Misida" age={28}/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path="users/:username" element={<ShowGithubUser/>} />
        </Routes>
        </Container>
    )
  }

