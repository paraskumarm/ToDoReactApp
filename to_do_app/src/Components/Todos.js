import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div>
      <h3 className="text-center my-3">ToDos List</h3>

      {
          props.todos.length===0?"No Todos to display":
      props.todos.map((todo) => {
        return <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />;
      })}
    </div>
  );
}
