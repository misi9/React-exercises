import {React} from 'react';
import { Routes,Route, useNavigate } from "react-router-dom"
import { Welcome } from './Welcome';
import { Container } from './Container';
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';
import { NotFound } from './NotFound';




export function App() {
  const navigate = useNavigate()

  function navigatePages(event){
    const {value} = event.target;
    navigate(value)
  }

    return (
      <Container title="Welcome girl!!">
        <button onClick={navigatePages} value="./welcome">Welcome</button>
        <button onClick={navigatePages} value="./counter">Let's Count</button>
        <button onClick={navigatePages} value="users/misi9">L'accesso è stato effettuato da</button>
        
      <Routes>
          <Route path='/welcome' element={<Welcome name="Misida" age={28}/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path="users/:username" element={<ShowGithubUser/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </Container>
    )
  }

