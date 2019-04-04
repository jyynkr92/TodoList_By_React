import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  state = {
    todos : [
      {
        completeFlag : true,
        content : "hello world",
        todoId : 1
      }
    ]
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <div>To Do List</div>
        <Todo todos={todos}></Todo>
      </div>
    );
  }
}

export default App;
