import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {text: 'Learn about React'},
      {text: 'Meet friends for lunch'},
      {text: 'build really cool todo app'}
    ]
  }

  setTodos = (todos) => this.setState({todos});

  render() {
    return (
      <div className="app">
        <h1>Todo App</h1>
        {this.state.todos.map((item) => (
          <p>{item.text}</p>
        ))}
      </div>
    );
  }
  
}

export default App;
