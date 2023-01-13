
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {
  let onDelete = (todo)=>{
    console.log("Delete hogaya", todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc)=>{
    console.log("add hua kya bhai ye?", title, desc)
    let sno = todos[todos.length-1].sno +1;
    const myTodo ={
      sno : sno,
      title : title,
      desc : desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState ([
    {
      sno:1,
      title:"Make a todo list",
      desc:"jaldi bana kal panvel bhi jana hai"
    },
    {
      sno:2,
      title:"Make a todo list2",
      desc:"jaldi bana kal biculla bhi jana hai"
    },
    {
      sno:3,
      title:"Make a todo list3",
      desc:"jaldi bana kal thane bhi jana hai"
    }
  ]);
  return (
    <>
    <Header title="TodoList" searchBar={true}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
