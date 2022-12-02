import {useState} from 'react';
import { GithubUser } from "./GithubUser";

export function App() {
  const [username, setUsername] = useState('')

    return (
     <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)}/>
      <GithubUser username="misi9"/>
     </div>
    )
  }

