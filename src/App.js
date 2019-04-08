import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './TodoHeader';
import TodoSection from './TodoSection';
import TodoFooter from './TodoFooter';

class App extends Component {
  state = {
    input : "",
    id : 1,
    todos : [
      {
        todoId : 1,
        content : "hello world",
        completeFlag : true
      }
    ]
  }

  addTodo = () => {
    const {input, todos, id} = this.state;

    this.setState({
      input : "",
      todos : todos.concat({
        todoId : todos.length + 1,
        content : input,
        completeFlag : false
      })
    });
  }

  onChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }  

  render() {
    const {input, todos} = this.state;
    const {addTodo, onChange} = this;

    return (
      <div>
        <div><h1>To Do List</h1></div>
        <TodoHeader todos={todos} addTodo={addTodo} change={onChange} input={input}></TodoHeader>
        <TodoSection todos={todos}></TodoSection>
        <TodoFooter todos={todos}></TodoFooter>
      </div>
    );
  }
}

export default App;
