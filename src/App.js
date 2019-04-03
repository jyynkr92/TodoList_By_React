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
    return (
      <div>
        <div>To Do List</div>
        <Todo todos={this.state.todos}></Todo>
      </div>
    );
  }
}

export default App;
