// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import React, { useEffect, useState } from "react";
import Addtodo from "./Components/Addtodo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let init_todo = [];
  if (localStorage.getItem("todos")) {
    init_todo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(init_todo);
  const onDelete = (todo) => {
    console.log(todo);
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    // localStorage.setItem("todos", JSON.stringify("todos"));


  };
  const addTodo = (title, desc) => {
    //  console.log(todo,desc);

    let sno;
    if (todos.length - 1 >= 0) {
      sno = todos[todos.length - 1].sno + 1;
    } else {
      sno = 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(myTodo)
    setTodos([...todos, myTodo]);
    // if(localStorage.getItem("todos")===null){
    //   localStorage.setItem("todos", JSON.stringify(todos));
    // }else{
    //   localStorage.setItem("todos", JSON.stringify(todos));
    // }
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="ToDo App" />
        <Routes>
          
            <Route path="/" element={<><Addtodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} /></>}></Route>
            <Route path="/about" element={<></>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
