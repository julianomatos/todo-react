import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';


const App = () => {


  // const initialTodos = [
  //   { id: 1, title: 'Estudar React', checked: false },
  //   { id: 2, title: 'Estudar Inglês', checked: false },
  // ];
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([...todos, {
      id: new Date().getTime(),
      title: value,
      checked: false,
    }])
  }




  const onToggle = (todo) => {
    setTodos( todos.map((obj) => (
      obj.id === todo.id ? { ...obj, checked: !todo.checked} : obj
    )))
  }
  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id))
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
      </section>
    </section>
  );
};

export default App;
