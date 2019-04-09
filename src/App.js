import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './TodoHeader';
import TodoSection from './TodoSection';
import TodoFooter from './TodoFooter';

class App extends Component {
  state = {
    input : "",
    todos : [
      {
        todoId : 1,
        content : "hello world",
        completeFlag : false
      }
    ]
  }

  addTodo = () => {
    const {input, todos} = this.state;

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

  keyEvent = (e) => {
    if(e.key === "Enter") {
      this.addTodo();
    }
  }

  toggleTask = (key) => {
    const {todos} = this.state;
    const testTodo = todos.filter(todo => todo.todoId === key);

    const index = todos.findIndex(todo => todo.todoId === key);

    const todoList = [...todos]; // copy array
    todoList[index] = {
      ...testTodo[0],
      completeFlag : !testTodo[0].completeFlag
    };

    this.setState({
      todos : todoList
    });
  }

  render() {
    const {input, todos} = this.state;
    const {addTodo, onChange, keyEvent, toggleTask} = this;

    return (
      <div className="todo_main">
        <div><h1>To Do List</h1></div>
        <TodoHeader todos={todos} addTodo={addTodo} change={onChange} input={input} keyPress={keyEvent}></TodoHeader>
        <TodoSection todos={todos} toggleTask={toggleTask}></TodoSection>
        <TodoFooter todos={todos}></TodoFooter>
      </div>
    );
  }
}

export default App;
