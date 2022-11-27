import React from "react";

import { TodoList } from "./TodoList";

export class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={(items, HandleRemove) => (
            <ul>
              {items.map((item, index) => (
                <div>
                  <li key={index}>{item}</li>
                  <button onClick={() => HandleRemove(index)}>Remove</button>
                </div>
              ))}
            </ul>
          )}
        />
      </div>
    );
  }
}
