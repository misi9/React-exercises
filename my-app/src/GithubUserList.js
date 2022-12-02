import { useState } from "react"
import { Link, Outlet } from "react-router-dom"




export function GithubUserList(){
    const [data, setData] = useState({
        usernames: [],
        input: '',
      })
    
      function inputValue(event) {
        setData((data) => {
          return {
            input: event.target.value,
            usernames: [...data.usernames]
          }
        })
      }
    
      function showUser(event) {
        event.preventDefault();
        setData((data) => {
          return {
            input: '',
            usernames: [data.input, ...data.usernames]
          }
        })
        console.log(data)
      }
    
      return (
        <div>
          <form>
            <input value={data.input} onChange={inputValue} />
            <button onClick={showUser}>Add user</button>
          </form>
          <ul>
            {data.usernames.map((username, index) =>
              <li key={index}>
                <Link to={`/users/${username}`}>{username}</Link>
              </li>
            )}
          </ul>
          <Outlet/>
        </div>
      )
    }


    