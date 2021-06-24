import React, { useState } from 'react';
import './App.css';
import Todo from './shared/components/todo';
import TodoForm from './shared/components/todo-form';

const  App = () => {
  const [todos, setTodos] = useState([
    {text: 'Learn about React', isCompleted: false},
    {text: 'Meet friends for lunch', isCompleted: false},
    {text: 'build really cool todo app', isCompleted: false}
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }
  
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="todo-list">
        {todos.map((item, index) => (
          <Todo key={index} todo={item} index={index} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
