import {React} from 'react';
import { FilteredList } from './FilteredList';




export function App() {

  const users = [
    {
      name: "Miley Cirus",
      id: 1,
      age: 30,
    },
    {
      name: "Anna Luisa",
      id: 2,
      age: 19,
    },
    {
      name: "Clarissa james",
      id: 3,
      age: 60,
    },
    {
      name: "Andy Royce",
      id: 4,
      age: 32,
    },
    {
      name: "Miki Lora",
      id: 5,
      age: 8,
    },
    {
      name: "Kate Jane",
      id: 6,
      age: 18,
    },
    {
      name: "Railey Rainolds",
      id: 7,
      age: 16,
    },
    {
      name: "Mary Kate Winslet",
      id: 8,
      age: 10,
    },
  ];
 

    return (
     <div>
      <FilteredList users={users}/>
     </div>
    )
  }

