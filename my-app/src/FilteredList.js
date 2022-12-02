
import { useMemo } from "react";
 
export  function FilteredList({ users }){

const list = (list) => {
  return <ul>{list.map((item) => <li>{item.name} </li>)}
  </ul>
}

  const filteredUsers = useMemo(() => users.filter((user) => user.age > 18),[users] )

  return (
  <div>
    <h3>Le persone maggiorenni sono e seguenti</h3>
    {list(filteredUsers)}
  </div>
  )
}




